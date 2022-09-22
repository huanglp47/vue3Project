import {defineStore} from "pinia";
import {getHitsApi} from '@/api/index';

interface UserInfo {
    userId?: string | number;
    name?: string;
    realName?: string;
    avatar?: string;
    age?: string | number;
}

interface UserState {
    userInfo: Nullable<UserInfo>;
    token?: string;
    name: string | number;
    hits: Array<string | number>,
}

interface GetUserInfoModel {
    data?: any;
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        name: 123,
        userInfo: {
            name: '111',
            age: 0,
        },
        hits: [],
    }),
    getters: {
        getUserInfo(): UserInfo {
            return this.userInfo || {};
        },
        getHits(): any {
            return this.hits || {};
        },
    },
    actions: {
        setInfo(data: { name: string; age: number; }) {
            this.userInfo = data
        },
        setHits(data:any) {
            this.hits = data;
        },

        async getHitsApi(params: object): Promise<GetUserInfoModel | null> {
            try {
                const data: any = await getHitsApi(params);
                this.setHits(data)
                return data;
            } catch (error) {
                return Promise.reject(error);
            }
        },

    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'ego_user',
                storage: localStorage
            }
        ]
    }
})
