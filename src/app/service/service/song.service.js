import model from '../../persistence/model'

class SongService {
  static async getAlbums() {
    try {
      return await model.song.findAll({
        attributes: ['album', 'artist', 'artwork'],
        group: ['album', 'artist', 'artwork']
      })
    } catch (error) {
      throw error
    }
  }

  static async getSongsAlbum(albumName) {
    console.log(albumName)
    try {
      return await model.song.findAll({
        attributes: ['name', 'track', 'artwork', 'url', 'artist', 'album'],
        where: { album: albumName }
      })
    } catch (error) {
      throw error
    }
  }

  static async getArtists() {
    try {
      return await model.song.findAll({
        attributes: ['artist'],
        group: ['artist']
      })
    } catch (error) {
      throw error
    }
  }

  static async getAlbumsArtist(artistName) {
    try {
      return await model.song.findAll({
        attributes: ['album', 'artwork'],
        group: ['album', 'artwork'],
        where: { artist: artistName }
      })
    } catch (error) {
      throw error
    }
  }
}

export default SongService
