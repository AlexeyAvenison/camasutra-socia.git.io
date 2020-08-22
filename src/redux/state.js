import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sitebarReducer from './sitebar-reducer';


// const UPDATE_NEWPOST_TEXT = 'UPDATE-NEWPOST-TEXT';
// const ADD_POST = 'ADD-POST';

// const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
// const POST_MESSAGE_TEXT = 'POST-MESSAGE-TEXT';
let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, messages: 'Hi, how are you?', likesCount: 5 },
                { id: 2, messages: 'Hi, it\'s my first post.', likesCount: 12 },
                { id: 3, messages: 'Hi, it\'s my first post.', likesCount: 12 },
                { id: 4, messages: 'Hi, it\'s my first post.', likesCount: 12 },
                { id: 5, messages: 'Hi, it\'s my first post.', likesCount: 12 }
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Andrew', ava: 'https://cdnimg.rg.ru/img/content/132/44/35/vliianie_kofe_d_850.jpg' },
                { id: 2, name: 'Alina', ava: 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg' },
                { id: 3, name: 'Dima', ava: 'https://i.lb.ua/093/06/5eafcd0924b16.jpeg' },
                { id: 4, name: 'Ivan' },
                { id: 5, name: 'Konstantin' },
                { id: 6, name: 'Vlad' }
            ],
            messages: [
                { id: 1, messages: 'Hi' },
            ],
            textMessages: ''
        },

        sitebar: {
            friends: [
                { name: 'Andrew', ava: 'https://cdnimg.rg.ru/img/content/132/44/35/vliianie_kofe_d_850.jpg' },
                { name: 'Alina', ava: 'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg' },
                { name: 'Dima', ava: 'https://i.lb.ua/093/06/5eafcd0924b16.jpeg' }
            ]
        }
    },

    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         messages: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.postsData.push(newPost);
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === UPDATE_NEWPOST_TEXT) {
        //     this._state.profilePage.newPostText = action.postText;
        //     this._callSubscriber(this);
        // }
        // else if (action.type === UPDATE_MESSAGE_TEXT) {
        //     this._state.dialogsPage.textMessages = action.messageText;
        //     this._callSubscriber(this);
        // }
        // else if (action.type === POST_MESSAGE_TEXT) {
        //     let text = this._state.dialogsPage.textMessages;
        //     let newMessages = {
        //         id: 1,
        //         messages: text
        //     }
        //     this._state.dialogsPage.messages.push(newMessages);
        //     text = '';
        //     this._callSubscriber(this);
        // }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type: 'UPDATE-NEWPOST-TEXT',
        postText: text
    }
}

export const messageChangeCreator = (text) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        messageText: text
    }
}

export const postMessageChangeCreator = () => {
    return {
        type: 'POST-MESSAGE-TEXT'
    }
}

export default store;
window.store = store;