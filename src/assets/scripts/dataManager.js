
class DataManager {
    static get STORAGE_KEY() {
        return 'tradeSkillsData';
    }

    static get DEFAULT_DATA() {
        return {
            requests: [],
            history: []
        };
    }

   

    static getCurrentUser() {
        if (typeof window.UserStorage !== 'undefined') {
            return window.UserStorage.getCurrentUser();
        }
        return null;
    }

    static getAllUsers() {
        if (typeof window.UserStorage !== 'undefined') {
            return window.UserStorage.getAllUsers();
        }
        return [];
    }

    static getUserById(userId) {
        const users = this.getAllUsers();
        return users.find(u => u.id === userId);
    }

    static updateUserCredits(userId, amount, operation) {
        if (typeof window.UserStorage === 'undefined') {
            console.error('UserStorage not found');
            return false;
        }

        const users = this.getAllUsers();
        const userIndex = users.findIndex(u => u.id === userId);

        if (userIndex === -1) {
            console.warn(`User ${userId} not found`);
            return false;
        }

        let user = users[userIndex];
        
        user.credits = typeof user.credits === 'number' ? user.credits : 0;

        if (operation === 'add') {
            user.credits += amount;
        } else if (operation === 'subtract') {
            user.credits -= amount;
        }

       
        
        window.UserStorage.setAllUsers(users);

        
        const currentUser = this.getCurrentUser();
        if (currentUser && currentUser.id === userId) {
            
            window.UserStorage.setCurrentUser(user);
        }

        return true;
    }

   

    static getTradeSkillsData() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (!stored) {
            return this.DEFAULT_DATA;
        }
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing tradeSkillsData', e);
            return this.DEFAULT_DATA;
        }
    }

    static saveTradeSkillsData(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }

    static getRequests() {
        const data = this.getTradeSkillsData();
        return Array.isArray(data.requests) ? data.requests : [];
    }

    static saveRequests(requests) {
        const data = this.getTradeSkillsData();
        data.requests = requests;
        this.saveTradeSkillsData(data);
    }

    static getHistory() {
        const data = this.getTradeSkillsData();
        return Array.isArray(data.history) ? data.history : [];
    }

    static saveHistory(history) {
        const data = this.getTradeSkillsData();
        data.history = history;
        this.saveTradeSkillsData(data);
    }

    static addHistoryEntry(entry) {
        const history = this.getHistory();
        history.push(entry);
        this.saveHistory(history);
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataManager;
} else if (typeof window !== 'undefined') {
    window.DataManager = DataManager;
}
