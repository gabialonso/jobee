import prisma from "../config/db";
import bcrypt from 'bcryptjs';
// src/services/profile.service.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProfile = async (userId) => {
        try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        persons: true,
        company: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }


    if (user.persons.length > 0) {
      return {
        type: "Person",
        data: user.persons[0], 
      };
    }

    // if profile is company
    if (user.company.length > 0) {
      return {
        type: "Company",
        data: user.companies[0],
      };
    }

    return { type: "None", data: null };
  } catch (error) {
    throw new Error(`Error fetching profile: ${error.message}`);
  }
};




