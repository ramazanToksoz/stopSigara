/**
 * useCommunity Hook
 * Custom hook for managing community posts, comments, and likes
 */

import { useState, useEffect, useCallback } from 'react';
import { auth } from '../../firebaseConfig';
import {
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getPostById,
  getUserPosts,
  createComment,
  deleteComment,
  getPostComments,
  toggleLike,
  getLikeStatus,
  reportContent,
} from '../services/communityService';

/**
 * Hook for managing posts feed
 * @param {object} filters - Filter options { userId?, type?, visibility? }
 * @param {number} pageSize - Number of posts per page
 * @returns {object} Posts state and functions
 */
export const usePosts = (filters = {}, pageSize = 20) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [lastPostId, setLastPostId] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  
  const fetchPosts = useCallback(async (refresh = false, retryCount = 0) => {
    if (!auth.currentUser) {
      setPosts([]);
      setError(null);
      return;
    }
    
    if (refresh) {
      setIsLoading(true);
      setLastPostId(null);
      setHasMore(true);
    } else {
      setIsLoadingMore(true);
    }
    
    setError(null);
    
    try {
      const result = await getPosts(
        filters,
        pageSize,
        refresh ? null : lastPostId
      );
      
      if (result.success) {
        if (refresh) {
          setPosts(result.posts || []);
        } else {
          setPosts((prev) => [...prev, ...(result.posts || [])]);
        }
        
        setLastPostId(result.lastPostId);
        setHasMore(result.posts && result.posts.length === pageSize);
      } else {
        // Retry logic: max 2 retries
        if (retryCount < 2 && result.error?.code !== 'permission-denied') {
          console.warn(`Retrying fetchPosts (attempt ${retryCount + 1})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
          return fetchPosts(refresh, retryCount + 1);
        }
        setError(result.error || result.message);
      }
    } catch (err) {
      // Retry logic for network errors
      if (retryCount < 2 && err.code === 'unavailable') {
        console.warn(`Retrying fetchPosts due to network error (attempt ${retryCount + 1})`);
        await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
        return fetchPosts(refresh, retryCount + 1);
      }
      setError(err.message || 'Failed to fetch posts');
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  }, [filters, pageSize, lastPostId]);
  
  useEffect(() => {
    fetchPosts(true);
  }, [filters]);
  
  const loadMore = useCallback(() => {
    if (!isLoadingMore && hasMore && !isLoading) {
      fetchPosts(false);
    }
  }, [fetchPosts, isLoadingMore, hasMore, isLoading]);
  
  const createNewPost = useCallback(async (postData) => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await createPost(auth.currentUser.uid, postData);
      
      if (result.success) {
        // Refresh posts
        await fetchPosts(true);
        return result;
      } else {
        setError(result.error || result.message);
        return result;
      }
    } catch (err) {
      const errorResult = { success: false, error: { message: err.message } };
      setError(err.message);
      return errorResult;
    } finally {
      setIsLoading(false);
    }
  }, [fetchPosts]);
  
  return {
    posts,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    createPost: createNewPost,
    refresh: () => fetchPosts(true),
    loadMore,
  };
};

/**
 * Hook for managing a single post
 * @param {string} postId - Post ID
 * @returns {object} Post state and functions
 */
export const usePost = (postId) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchPost = useCallback(async () => {
    if (!postId) {
      setPost(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getPostById(postId);
      
      if (result.success) {
        setPost(result.post);
      } else {
        setError(result.error || result.message);
        setPost(null);
      }
    } catch (err) {
      setError(err.message);
      setPost(null);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);
  
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  
  return {
    post,
    isLoading,
    error,
    refetch: fetchPost,
  };
};

/**
 * Hook for managing post comments
 * @param {string} postId - Post ID
 * @param {number} pageSize - Number of comments per page
 * @returns {object} Comments state and functions
 */
export const usePostComments = (postId, pageSize = 50) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchComments = useCallback(async (retryCount = 0) => {
    if (!postId || !auth.currentUser) {
      setComments([]);
      setError(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getPostComments(postId, pageSize);
      
      if (result.success) {
        setComments(result.comments || []);
      } else {
        // Retry logic: max 2 retries
        if (retryCount < 2 && result.error?.code !== 'permission-denied') {
          console.warn(`Retrying fetchComments (attempt ${retryCount + 1})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
          return fetchComments(retryCount + 1);
        }
        setError(result.error || result.message);
        setComments([]);
      }
    } catch (err) {
      // Retry logic for network errors
      if (retryCount < 2 && err.code === 'unavailable') {
        console.warn(`Retrying fetchComments due to network error (attempt ${retryCount + 1})`);
        await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
        return fetchComments(retryCount + 1);
      }
      setError(err.message || 'Failed to fetch comments');
      setComments([]);
    } finally {
      setIsLoading(false);
    }
  }, [postId, pageSize]);
  
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);
  
  const addComment = useCallback(async (content) => {
    if (!auth.currentUser) {
      return { success: false, error: { message: 'User not authenticated' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await createComment(postId, auth.currentUser.uid, content);
      
      if (result.success) {
        // Refresh comments
        await fetchComments();
        return result;
      } else {
        setError(result.error || result.message);
        return result;
      }
    } catch (err) {
      const errorResult = { success: false, error: { message: err.message } };
      setError(err.message);
      return errorResult;
    } finally {
      setIsLoading(false);
    }
  }, [postId, fetchComments]);
  
  return {
    comments,
    isLoading,
    error,
    addComment,
    refetch: fetchComments,
  };
};

/**
 * Hook for managing like status
 * @param {string} targetType - 'post' | 'comment'
 * @param {string} targetId - Post or Comment ID
 * @returns {object} Like state and functions
 */
export const useLikeStatus = (targetType, targetId) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchLikeStatus = useCallback(async () => {
    if (!targetId || !auth.currentUser || !targetType) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const statusResult = await getLikeStatus(auth.currentUser.uid, targetType, targetId);
      
      if (statusResult.success) {
        setLiked(statusResult.liked);
      }
    } catch (err) {
      // Ignore errors for like status
    } finally {
      setIsLoading(false);
    }
  }, [targetType, targetId]);
  
  useEffect(() => {
    fetchLikeStatus();
  }, [fetchLikeStatus]);
  
  const toggleLikeStatus = useCallback(async () => {
    if (!auth.currentUser || !targetId || !targetType) {
      return { success: false, error: { message: 'Invalid parameters' } };
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await toggleLike(auth.currentUser.uid, targetType, targetId);
      
      if (result.success) {
        setLiked(result.liked);
        // Optimistically update likes count
        setLikesCount((prev) => (result.liked ? prev + 1 : Math.max(0, prev - 1)));
        return result;
      } else {
        setError(result.error || result.message);
        return result;
      }
    } catch (err) {
      const errorResult = { success: false, error: { message: err.message } };
      setError(err.message);
      return errorResult;
    } finally {
      setIsLoading(false);
    }
  }, [targetType, targetId]);
  
  return {
    liked,
    likesCount,
    isLoading,
    error,
    toggleLike: toggleLikeStatus,
    refetch: fetchLikeStatus,
  };
};

