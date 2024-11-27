import { youtubeApiKey, apiUrl } from "@constants/env.constants";
import { request } from "@data/api";
import {
  CategoryItem,
  ParamRequest,
  VideoListResponse,
} from "@models/app.model";
import { useQuery } from "@tanstack/react-query";
import { toQueryString } from "@utils/helpers";

export const appService = {
  useGetPlaylist: ({
    part = "snippet",
    key = youtubeApiKey,
    maxResults = 5,
    q,
    videoCategoryId,
    type = "video",
  }: ParamRequest) => {
    const getPlaylist = async () => {
      const params = toQueryString({
        part,
        maxResults,
        q,
        videoCategoryId,
        type,
        key,
      });
      const response = await request<VideoListResponse>(
        `${apiUrl}/search?${params}`,
        {
          method: "GET",
        },
      );

      return response;
    };
    const { data, isLoading } = useQuery({
      queryKey: ["video", key, maxResults, q, videoCategoryId, type],
      queryFn: getPlaylist,
      retry: 0,
    });

    return { data, isLoading };
  },
  useGetDetail: ({
    key = youtubeApiKey,
    videoId,
    part = "snippet,contentDetails,statistics",
  }: ParamRequest) => {
    const getPlaylist = async () => {
      const response = await request<VideoListResponse>(
        `${apiUrl}/videos?part=${part}&key=${key}&id=${videoId}`,
        {
          method: "GET",
        },
      );

      return response;
    };
    const { data, isLoading } = useQuery({
      queryKey: ["video", key, videoId],
      queryFn: getPlaylist,
      retry: 0,
      enabled: !!videoId,
    });

    return { data, isLoading };
  },
  useGetRecommendedList: ({
    key = youtubeApiKey,
    videoId,
    part = "snippet,contentDetails,statistics",
    maxResults = 10,
    chart = "mostPopular",
  }: ParamRequest) => {
    const getPlaylist = async () => {
      const response = await request<VideoListResponse>(
        `${apiUrl}/videos?part=${part}&key=${key}&maxResults=${maxResults}&chart=${chart}`,
        {
          method: "GET",
        },
      );

      return response;
    };
    const { data, isLoading } = useQuery({
      queryKey: ["video", key, videoId],
      queryFn: getPlaylist,
      retry: 0,
    });

    return { data, isLoading };
  },
  useGetCategories: () => {
    const getCategories = async () => {
      const response = await request<{
        items: CategoryItem[];
      }>(
        `${apiUrl}/videoCategories?part=snippet&regionCode=VN&key=${youtubeApiKey}`,
        {
          method: "GET",
        },
      );

      return response;
    };
    const { data, isLoading } = useQuery({
      queryKey: ["categories"],
      queryFn: getCategories,
      retry: 0,
    });

    return { data, isLoading };
  },
};
