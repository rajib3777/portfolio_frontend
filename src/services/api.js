import axios from "axios";

// Use env var if exists, else fallback to production
const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://portfolio-backend-4gnj.onrender.com";

// Global axios instance
export const api = axios.create({
  baseURL: API_BASE,
});

// ---- Portfolio ----
export const fetchHero = () => api.get("/api/portfolio/hero/");
export const fetchAbout = () => api.get("/api/portfolio/about/");
export const fetchSkills = () => api.get("/api/portfolio/skills/");
export const fetchExperience = () => api.get("/api/portfolio/experience/");
export const fetchEducation = () => api.get("/api/portfolio/education/");
export const fetchStats = () => api.get("/api/portfolio/stats/");

// ---- Projects ----
export const fetchProjects = (params = {}) =>
  api.get("/api/projects/", { params });

// ---- Resume ----
export const resumeDownloadUrl = `${API_BASE}/api/resume/dynamic/`;

// ---- Contact ----
export const sendContactMessage = (payload) =>
  api.post("/api/contact/", payload);

// ---- Social Links ----
// CHANGED: API → API_BASE + axios instance removed
export const fetchSocialLinks = () => 
  api.get("/api/social-links/");
