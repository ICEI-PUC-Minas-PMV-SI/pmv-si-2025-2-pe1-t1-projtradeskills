class UserStorage {
    static getCurrentUser() {
        try {
            const currentUser = localStorage.getItem('currentUser');
            return currentUser ? JSON.parse(currentUser) : null;
        } catch (error) {
            console.error('Erro ao obter usuário atual:', error);
            return null;
        }
    }

    static setCurrentUser(user) {
        try {
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            window.dispatchEvent(new CustomEvent('currentUserChanged'));
            return true;
        } catch (error) {
            console.error('Erro ao salvar usuário atual:', error);
            return false;
        }
    }

    static getAllUsers() {
        try {
            const users = localStorage.getItem('users');
            return users ? JSON.parse(users) : [];
        } catch (error) {
            console.error('Erro ao obter lista de usuários:', error);
            return [];
        }
    }

    static setAllUsers(users) {
        try {
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        } catch (error) {
            console.error('Erro ao salvar lista de usuários:', error);
            return false;
        }
    }

    static updateCurrentUserField(field, value) {
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) {
                console.error('Nenhum usuário logado encontrado');
                return false;
            }

           
            currentUser[field] = value;
            this.setCurrentUser(currentUser);

           
            const users = this.getAllUsers();
            const userIndex = users.findIndex(user => user.id === currentUser.id);

            if (userIndex !== -1) {
                users[userIndex][field] = value;
                this.setAllUsers(users);
            }

          
            window.dispatchEvent(new CustomEvent('currentUserChanged'));

            return true;
        } catch (error) {
            console.error('Erro ao atualizar campo do usuário:', error);
            return false;
        }
    }

    static updateUserImage(imageBase64) {
        return this.updateCurrentUserField('image', imageBase64);
    }

    static updateUserData(userData) {
        try {
            const currentUser = this.getCurrentUser();
            if (!currentUser) {
                console.error('Nenhum usuário logado encontrado');
                return false;
            }

            
            Object.keys(userData).forEach(key => {
                if (userData[key] !== undefined && userData[key] !== null) {
                    currentUser[key] = userData[key];
                }
            });

            this.setCurrentUser(currentUser);

            
            const users = this.getAllUsers();
            const userIndex = users.findIndex(user => user.id === currentUser.id);

            if (userIndex !== -1) {
                users[userIndex] = { ...currentUser };
                this.setAllUsers(users);
            }

            return true;
        } catch (error) {
            console.error('Erro ao atualizar dados do usuário:', error);
            return false;
        }
    }

    static parseCityState(cityStateString) {
        if (!cityStateString || !cityStateString.trim()) {
            return { city: '', state: '' };
        }

        const parts = cityStateString.trim().split('/');
        if (parts.length === 2) {
            return {
                city: parts[0].trim(),
                state: parts[1].trim()
            };
        } else {
            
            return {
                city: cityStateString.trim(),
                state: ''
            };
        }
    }

    static formatCityState(city, state) {
        if (city && state) {
            return `${city}/${state}`;
        }
        return city || '';
    }

    static updateOtherUserField(userId, field, value) {
        try {
            const users = this.getAllUsers();
            const userIndex = users.findIndex(user => user.id === userId);

            if (userIndex !== -1) {
                users[userIndex][field] = value;
                this.setAllUsers(users);

               
                const currentUser = this.getCurrentUser();
                if (currentUser && currentUser.id === userId) {
                    currentUser[field] = value;
                    this.setCurrentUser(currentUser);
                }
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erro ao atualizar outro usuário:', error);
            return false;
        }
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserStorage;
} else if (typeof window !== 'undefined') {
    window.UserStorage = UserStorage;
}