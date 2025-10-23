// Helper para leer datos simulados de archivos JSON
// Cuando se integre con backend, solo reemplazar estas funciones con llamadas a apiFetch()

import companyStatsData from '../data/companyStats.json';
import userCoursesData from '../data/userCourses.json';
import conversationsData from '../data/conversations.json';
import messagesData from '../data/messages.json';
import candidatesData from '../data/candidates.json';
import jobOffersData from '../data/jobOffers.json';

// Simula delay de red para hacerlo más realista
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Estadísticas de empresa
  async getCompanyStats(companyId) {
    await delay(300);
    return {
      success: true,
      data: companyStatsData[companyId] || {
        totalCandidates: 0,
        activeJobs: 0,
        publishedCourses: 0
      }
    };
  },

  // Cursos del usuario
  async getUserCourses(userId) {
    await delay(400);
    return {
      success: true,
      data: userCoursesData[userId] || []
    };
  },

  // Conversaciones
  async getConversations(userType, userId) {
    await delay(350);
    const key = `${userType}_${userId}`;
    return {
      success: true,
      data: conversationsData[key] || []
    };
  },

  // Mensajes de una conversación
  async getMessages(conversationId) {
    await delay(400);
    return {
      success: true,
      data: messagesData[conversationId] || []
    };
  },

  // Enviar mensaje (simula éxito)
  async sendMessage(conversationId, text) {
    await delay(500);
    const newMessage = {
      id: Date.now(),
      senderId: 'current_user',
      senderName: 'Yo',
      text,
      timestamp: new Date().toISOString()
    };
    return {
      success: true,
      data: newMessage
    };
  },

  // Lista de candidatos (para empresas)
  async getCandidates() {
    await delay(450);
    return {
      success: true,
      data: candidatesData
    };
  },

  // Ofertas laborales de una empresa
  async getJobOffers(companyId) {
    await delay(400);
    return {
      success: true,
      data: jobOffersData[companyId] || []
    };
  },

  // Crear oferta laboral
  async createJobOffer(companyId, offerData) {
    await delay(600);
    const newOffer = {
      id: Date.now(),
      ...offerData,
      applicants: 0,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    return {
      success: true,
      data: newOffer
    };
  },

  // Actualizar oferta laboral
  async updateJobOffer(offerId, offerData) {
    await delay(500);
    return {
      success: true,
      data: { id: offerId, ...offerData }
    };
  },

  // Eliminar oferta laboral
  async deleteJobOffer() {
    await delay(400);
    return {
      success: true,
      message: 'Oferta eliminada exitosamente'
    };
  },

  // Inscribirse a un curso
  async enrollInCourse() {
    await delay(500);
    return {
      success: true,
      message: 'Inscripción exitosa'
    };
  }
};
