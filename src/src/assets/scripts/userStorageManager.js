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
            // Dispara evento customizado para atualizar componentes em tela
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

            // Atualiza o campo no usuário atual
            currentUser[field] = value;
            this.setCurrentUser(currentUser);

            // Atualiza também na lista de usuários
            const users = this.getAllUsers();
            const userIndex = users.findIndex(user => user.id === currentUser.id);
            
            if (userIndex !== -1) {
                users[userIndex][field] = value;
                this.setAllUsers(users);
            }

            // Dispara evento customizado para atualizar componentes em tela
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

            // Atualiza os campos fornecidos
            Object.keys(userData).forEach(key => {
                if (userData[key] !== undefined && userData[key] !== null) {
                    currentUser[key] = userData[key];
                }
            });

            this.setCurrentUser(currentUser);

            // Atualiza também na lista de usuários
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
            // Se não estiver no formato correto, assume como cidade apenas
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
}

// Exporta para uso em outros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserStorage;
} else if (typeof window !== 'undefined') {
    window.UserStorage = UserStorage;
}