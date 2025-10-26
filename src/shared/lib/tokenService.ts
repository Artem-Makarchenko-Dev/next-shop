export const tokenService = {
  getAccess: () => (typeof window !== "undefined" ? localStorage.getItem("accessToken") : null),

  getRefresh: () => (typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null),

  setTokens: (access: string, refresh: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
    }
  },

  clear: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  },
};