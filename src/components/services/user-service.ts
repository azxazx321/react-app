import apiClient from "./api-client";


export interface User {
    id: number;
    name: string;
  
  }
class UserService {
    getAllUsers() {
        const controller = new AbortController();
         const request = apiClient.get<User[]>('/users', {signal: controller.signal})
        return { request, cancel: () => controller.abort() }
    }
    deleteUser(user: User) {
        return apiClient.delete('/users/' + user.id)
    }
    createUser(newUsers: User) {
       return apiClient.post('/users' , newUsers)
    }
    updateUser(updateUser: User) {
     return apiClient.patch('/users/' + updateUser.id, updateUser)
    }
}

export default new UserService();