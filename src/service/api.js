export default class Api {
    constructor () {
        this.music = null;
        this.player = null;
    }
    async configure () {
        window.MusicKit.configure({
            developerToken: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhKWVI5TFpCNVgifQ.eyJpYXQiOjE1NDQwMjU5MzEsImV4cCI6MTU1OTU3NzkzMSwiaXNzIjoiVUM5REc5Mko2SiJ9.NE-pTkKDHS6klZ52oub617LWgvedHMYFG4-p8csfuIQH60S7gGwSIWeigY7h4R_eKcLA8X3KZqyMT0H0Ix73Iw',
            name: 'Codepen',
            build: '1'
        });
        this.music = await window.MusicKit.getInstance();
        this.player = this.music.player;
        return this.music;
    }
    async isAuthorized () {
        return this.music.isAuthorized;
    }
    async authorize() {
        this.music.authorize().then(res=>{
            return res;
        });
    }
    async unauthorize() {
        this.music.unauthorize().then(res => {
            return res;
        });
    }
    async play () {
        await this.player.play();
    }
    async pause() {
        await this.player.pause();
    }
    async getAlbums () {
        return await this.music.api.library.albums();
    }
    async getPlaylists () {
        return await this.music.api.library.playlists();
    }
    async setQueue (id,type) {
        this.music.setQueue({
            [type]: id
        });
    }
    async getAlbum (id) {
        return await this.music.api.library.album(id);
    }
    getCurrent () {//FIXME: doesnt work
        return this.player.currentMediaItem;
    }
}