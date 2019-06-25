import SongService from '../../service/service/song.service'

class SongController {
  static async getAlbums(req, res) {
    try {
      return res.status(200).json(await SongService.getAlbums())
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  static async getSongsAlbum(req, res) {
    try {
      return res.status(200).json(await SongService.getSongsAlbum(req.params.album))
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  static async getArtists(req, res) {
    try {
      return res.status(200).json(await SongService.getArtists())
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  static async getAlbumsArtist(req, res) {
    try {
      return res.status(200).json(await SongService.getAlbumsArtist(req.params.artist))
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default SongController
