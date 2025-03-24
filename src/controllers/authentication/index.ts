import { SignUpWithUsernameAndPasswordError, type SignUpWithUsernameAndPasswordResult } from "./+type";
import { prismaClient } from "../../extras/prisma";

export const signUpWithUsernameAndPassword = async (username: string, password: string): Promise<SignUpWithUsernameAndPasswordResult> => {
    const existingUser = await prismaClient.user.findUnique({
        where: {
            username
        }
    });

    if (existingUser) {
        throw SignUpWithUsernameAndPasswordError.CONFLICTING_USERNAME;
    }

    const newUser = await prismaClient.user.create({
        data: {
            username,
            password
        }
    });

    return {
        token: 'TODO',
        user: newUser
    };
