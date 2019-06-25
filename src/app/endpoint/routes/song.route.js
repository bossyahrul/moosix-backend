import { Router } from 'express'
import SongController from '../controller/song.controller'

const router = Router()

router.get('/albums', SongController.getAlbums)
router.get('/album/:album', SongController.getSongsAlbum)
router.get('/artists', SongController.getArtists)
router.get('/artist/:artist', SongController.getAlbumsArtist)

export default router
