export enum Page {
  Home = "home",
  Dashboard = "dashboard",
  Album = "album",
  NotFound = "notFound",
  Playlist = "playlist",
  Artist = "artist",
  Search = "search",
  Concert = "concert",
  Episode = "episode",
  Podcast = "podcast",
  Genre = "genre",
  Show = "show",
  Track = "track",
  User = "user",
  CollectionTracks = "collectionTracks",
  CollectionAlbums = "collectionAlbums",
  CollectionArtists = "collectionArtists",
  CollectionPlaylists = "collectionPlaylists",
  CollectionPodcasts = "collectionPodcasts",
  Collection = "collection",
  Radio = "radio",
  TopTracks = "topTracks",
  Preferences = "preferences",
}

export enum Language {
  EN = "EN",
  ES = "ES",
}

export const spanishCountries = [
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "SV",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PY",
  "PE",
  "PR",
  "ES",
  "UY",
  "VE",
];

const shortCutsTranslations = {
  [Language.EN]: {
    shortCutsTitle: "Keyboard Shortcuts",
    shortCutdescription: "Press {0} or {1} to toggle this modal.",
    basic: "Basic",
    createNewPlaylist: "Create new playlist",
    createNewFolder: "Create new folder",
    openContextMenu: "Open context menu",
    openQuickSearch: "Open Quick Search",
    logOut: "Log out",
    playback: "Playback",
    playPause: "Play / Pause",
    like: "Like",
    shuffle: "Shuffle",
    repeat: "Repeat",
    skipToPrevious: "Skip to previous",
    skipToNext: "Skip to next",
    seekBackward: "Seek backward",
    seekForward: "Seek forward",
    raiseVolume: "Raise volume",
    lowerVolume: "Lower volume",
    navigation: "Navigation",
    home: "Home",
    backInHistory: "Back in history",
    forwardInHistory: "Forward in history",
    currentlyPlaying: "Currently playing",
    search: "Search",
    likedSongs: "Liked Songs",
    queue: "Queue",
    yourPlaylists: "Your playlists",
    yourPodcasts: "Your podcasts",
    yourArtists: "Your artists",
    yourAlbums: "Your albums",
    madeForYou: "Made for you",
    newReleases: "New Releases",
    charts: "Charts",
    layout: "Layout",
    decreaseNavigationWidth: "Decrease navigation bar width",
    increaseNavigationWidth: "Increase navigation bar width",
    decreaseActivityTabWidth: "Decrease activity tab width",
    increaseActivityTabWidth: "Increase activity tab width",
  },
  [Language.ES]: {
    shortCutsTitle: "Atajos del teclado",
    shortCutdescription:
      "Presiona {0} o {1} para activar/desactivar este modal.",
    basic: "Básicos",
    createNewPlaylist: "Crear nueva playlist",
    createNewFolder: "Crear nueva carpeta",
    openContextMenu: "Abrir el menú contextual",
    openQuickSearch: "Abrir búsqueda rápida",
    logOut: "Cerrar sesión",
    playback: "Reproducción",
    playPause: "Reproducir/Pausar",
    like: "Me gusta",
    shuffle: "Aleatorio",
    repeat: "Repetir",
    skipToPrevious: "Volver a la anterior",
    skipToNext: "Saltar a la siguiente",
    seekBackward: "Buscar hacia atrás",
    seekForward: "Buscar hacia delante",
    raiseVolume: "Subir el volumen",
    lowerVolume: "Bajar el volumen",
    navigation: "Navegación",
    home: "Inicio",
    backInHistory: "Volver atrás en el historial",
    forwardInHistory: "Ir hacia adelante en el historial",
    currentlyPlaying: "Reproduciendo actualmente",
    search: "Buscar",
    likedSongs: "Tus me gusta",
    queue: "Cola de reproducción",
    yourPlaylists: "Tus playlists",
    yourPodcasts: "Tus podcasts",
    yourArtists: "Tus artistas",
    yourAlbums: "Tus álbumes",
    madeForYou: "Creado para ti",
    newReleases: "Nuevos Lanzamientos",
    charts: "Listas",
    layout: "Diseño",
    decreaseNavigationWidth: "Disminuir el ancho de la barra de navegación",
    increaseNavigationWidth: "Aumentar el ancho de la barra de navegación",
    decreaseActivityTabWidth: "Disminuir el ancho de la pestaña de actividad",
    increaseActivityTabWidth: "Aumentar el ancho de la pestaña de actividad",
  },
};

export enum ContentType {
  Album = "album",
  Artist = "artist",
  Playlist = "playlist",
  Podcast = "podcast",
  Track = "track",
  Items = "items",
  Episode = "episode",
  Show = "show",
  Library = "library",
  Queue = "queue",
  Image = "image",
  Details = "details",
}

const types: Record<Language, Record<ContentType, string>> = {
  [Language.EN]: {
    [ContentType.Album]: "album",
    [ContentType.Artist]: "artist",
    [ContentType.Playlist]: "playlist",
    [ContentType.Podcast]: "podcast",
    [ContentType.Track]: "track",
    [ContentType.Items]: "items",
    [ContentType.Episode]: "episode",
    [ContentType.Show]: "show",
    [ContentType.Library]: "library",
    [ContentType.Queue]: "queue",
    [ContentType.Image]: "image",
    [ContentType.Details]: "details",
  },
  [Language.ES]: {
    [ContentType.Album]: "álbum",
    [ContentType.Artist]: "artista",
    [ContentType.Playlist]: "playlist",
    [ContentType.Podcast]: "podcast",
    [ContentType.Track]: "track",
    [ContentType.Items]: "elementos",
    [ContentType.Episode]: "episodio",
    [ContentType.Show]: "show",
    [ContentType.Library]: "biblioteca",
    [ContentType.Queue]: "la cola de reproducción",
    [ContentType.Image]: "imagen",
    [ContentType.Details]: "detalles",
  },
};

export enum ToastMessage {
  AddedTo = "toastMessage.addedTo",
  RemovedFrom = "toastMessage.removedFrom",
  TypeAddedTo = "toastMessage.typeAddedTo",
  TypeRemovedFrom = "toastMessage.typeRemoveFrom",
  CouldNotAddTo = "toastMessage.couldNotAddTo",
  CouldNotRemoveFrom = "toastMessage.couldNotRemoveFrom",
  UnableToPlayReconnecting = "toastMessage.unableToPlay",
  ErrorPlayingThis = "toastMessage.errorPlayingThis",
  IsCorruptedAndCannotBePlayed = "toastMessage.isCorruptedAndCannotBePlayed",
  ContentIsUnavailable = "toastMessage.contentIsUnavailable",
  DeviceConnectedTo = "toastMessage.deviceConnectedTo",
  PremiumRequired = "toastMessage.premiumRequired",
  TypeUpdated = "toastMessage.typeUpdated",
  ErrorCreating = "toastMessage.errorCreating",
  ErrorUpdating = "toastMessage.errorUpdating",
  UnabledToRemove = "toastMessage.unableToRemove",
  FileIsNotAnImage = "toastMessage.fileIsNotAnImage",
  CopiedToClipboard = "toastMessage.copiedToClipboard",
  FailedToCopyToClipboard = "toastMessage.failedToCopyToClipboard",
  NoLyricsToDisplay = "toastMessage.noLyricsToDisplay",
  NoDeviceConnected = "toastMessage.noDeviceConnected",
  NothingPlaying = "toastMessage.nothingPlaying",
  WelcomePreparing = "toastMessage.welcomePreparing",
  WelcomeReady = "toastMessage.welcomeReady",
  PlayerReady = "toastMessage.playerReady",
  PlayerNotReady = "toastMessage.playerNotReady",
  PlayerAuthenticationError = "toastMessage.playerAuthenticationError",
  PlayerAutoPlayFailed = "toastMessage.playerAutoPlayFailed",
  PlayerInitializationError = "toastMessage.playerInitializationError",
  PlayerPlaybackError = "toastMessage.playerPlaybackError",
  PlayerAccountError = "toastMessage.playerAccountError",
}

const toastMessages: Record<Language, Record<ToastMessage, string>> = {
  [Language.EN]: {
    [ToastMessage.AddedTo]: "Added to {0}",
    [ToastMessage.RemovedFrom]: "Removed from {0}",
    [ToastMessage.TypeAddedTo]: "{0} added to your {1}",
    [ToastMessage.TypeRemovedFrom]: "{0} removed from your {1}",
    [ToastMessage.CouldNotAddTo]: "Could not add to {0}",
    [ToastMessage.CouldNotRemoveFrom]: "Could not remove from {0}",
    [ToastMessage.UnableToPlayReconnecting]:
      "Unable to play, trying to reconnect, please wait...",
    [ToastMessage.ErrorPlayingThis]: "Error playing this {0}",
    [ToastMessage.IsCorruptedAndCannotBePlayed]:
      "This {0} is corrupted and cannot be played",
    [ToastMessage.ContentIsUnavailable]: "Content is unavailable",
    [ToastMessage.DeviceConnectedTo]: "Device connected to {0}",
    [ToastMessage.PremiumRequired]:
      "You need a premium account to use this feature",
    [ToastMessage.TypeUpdated]: "{0} updated",
    [ToastMessage.ErrorCreating]: "Error creating {0}",
    [ToastMessage.ErrorUpdating]: "Error updating {0}",
    [ToastMessage.UnabledToRemove]: "Unable to remove {0}",
    [ToastMessage.FileIsNotAnImage]: "File is not an image",
    [ToastMessage.CopiedToClipboard]: "Copied to clipboard",
    [ToastMessage.FailedToCopyToClipboard]: "Failed to copy to clipboard",
    [ToastMessage.NoLyricsToDisplay]: "No lyrics to display",
    [ToastMessage.NoDeviceConnected]: "No device connected",
    [ToastMessage.NothingPlaying]: "Nothing playing",
    [ToastMessage.WelcomePreparing]:
      "Welcome to Rindu, preparing your music for you",
    [ToastMessage.WelcomeReady]: "Welcome to Rindu, prepare to enjoy!",
    [ToastMessage.PlayerReady]: "You are now connected to Spotify, enjoy!",
    [ToastMessage.PlayerNotReady]: "You are not connected to Spotify",
    [ToastMessage.PlayerAuthenticationError]:
      "There was an error authenticating with Spotify",
    [ToastMessage.PlayerAutoPlayFailed]:
      "There was an error playing your music",
    [ToastMessage.PlayerInitializationError]:
      "There was an error initializing the player",
    [ToastMessage.PlayerPlaybackError]: "There was an error playing your music",
    [ToastMessage.PlayerAccountError]:
      "There was an error with your Spotify account",
  },
  [Language.ES]: {
    [ToastMessage.AddedTo]: "Añadido a {0}",
    [ToastMessage.RemovedFrom]: "Eliminado de {0}",
    [ToastMessage.TypeAddedTo]: "{0} añadido a tu {1}",
    [ToastMessage.TypeRemovedFrom]: "{0} eliminado de tu {1}",
    [ToastMessage.CouldNotAddTo]: "No se pudo añadir a {0}",
    [ToastMessage.CouldNotRemoveFrom]: "No se pudo eliminar de {0}",
    [ToastMessage.UnableToPlayReconnecting]:
      "No se puede reproducir, intentando reconectar, por favor espera...",
    [ToastMessage.ErrorPlayingThis]: "Error al reproducir esta canción",
    [ToastMessage.IsCorruptedAndCannotBePlayed]:
      "El {0} está corrupta y no se puede reproducir",
    [ToastMessage.ContentIsUnavailable]: "El contenido no está disponible",
    [ToastMessage.DeviceConnectedTo]: "Dispositivo conectado a {0}",
    [ToastMessage.PremiumRequired]:
      "Necesitas una cuenta premium para usar esta función",
    [ToastMessage.TypeUpdated]: "{0} actualizados",
    [ToastMessage.ErrorCreating]: "Error al crear {0}",
    [ToastMessage.ErrorUpdating]: "Error al actualizar {0}",
    [ToastMessage.UnabledToRemove]: "No se pudo eliminar {0}",
    [ToastMessage.FileIsNotAnImage]: "El archivo no es una imagen",
    [ToastMessage.CopiedToClipboard]: "Copiado al portapapeles",
    [ToastMessage.FailedToCopyToClipboard]: "No se pudo copiar al portapapeles",
    [ToastMessage.NoLyricsToDisplay]: "No hay letras para mostrar",
    [ToastMessage.NoDeviceConnected]: "Dispositivo no conectado",
    [ToastMessage.NothingPlaying]: "No se está reproduciendo nada",
    [ToastMessage.WelcomePreparing]:
      "Bienvenido a Rindu, preparando tu música para ti",
    [ToastMessage.WelcomeReady]:
      "Bienvenido a Rindu, prepárate para disfrutar!",
    [ToastMessage.PlayerReady]: "Ahora estás conectado a Spotify, ¡disfruta!",
    [ToastMessage.PlayerNotReady]: "No estás conectado a Spotify",
    [ToastMessage.PlayerAuthenticationError]:
      "Hubo un error al autenticarse con Spotify",
    [ToastMessage.PlayerAutoPlayFailed]:
      "Hubo un error al reproducir tu música",
    [ToastMessage.PlayerInitializationError]:
      "Hubo un error al inicializar el reproductor",
    [ToastMessage.PlayerPlaybackError]: "Hubo un error al reproducir tu música",
    [ToastMessage.PlayerAccountError]: "Hubo un error con tu cuenta de Spotify",
  },
};

const sideBarTranslations = {
  [Language.EN]: {
    collection: "Your Library",
    createPlaylist: "Create Playlist",
    yourEpisodes: "Your Episodes",
    minimizeCoverImage: "Minimize cover image",
    download: "Download",
    help: "Help",
    profile: "Profile",
    account: "Account",
    preferences: "Settings",
    upgradeToPremium: "Upgrade to Premium",
    ...shortCutsTranslations[Language.EN],
    ...toastMessages[Language.EN],
    ...types[Language.EN],
  },
  [Language.ES]: {
    collection: "Tu Biblioteca",
    createPlaylist: "Crear Playlist",
    yourEpisodes: "Tus episodios",
    minimizeCoverImage: "Minimizar imagen de portada",
    download: "Descargar",
    help: "Ayuda",
    profile: "Perfil",
    account: "Cuenta",
    preferences: "Preferencias",
    upgradeToPremium: "Actualizar a Premium",
    ...shortCutsTranslations[Language.ES],
    ...toastMessages[Language.ES],
    ...types[Language.ES],
  },
};
const queueTranslations = {
  [Language.EN]: {
    previousTracks: "Previous Tracks",
    currentlyPlaying: "Now Playing",
    nextUp: "Next Up",
  },
  [Language.ES]: {
    previousTracks: "Canciones anteriores",
    currentlyPlaying: "Reproduciendo",
    nextUp: "Siguiente",
  },
};

const pageHeaderTranslations = {
  [Language.EN]: {
    pageHeaderArtist: "ARTIST",
    pageHeaderAlbum: "ALBUM",
    pageHeaderPlaylist: "PLAYLIST",
    pageHeaderSingle: "SINGLE",
    pageHeaderCompilation: "COMPILATION",
    pageHeaderProfile: "PROFILE",
    pageHeaderConcert: "CONCERT",
    pageHeaderEpisode: "EPISODE",
    pageHeaderPodcast: "PODCAST",
    pageHeaderRadio: "RADIO",
    pageHeaderTop: "TOP",
    pageHeaderSong: "SONG",
    followers: "followers",
    song: "Song",
    songs: "Songs",
    minutes: "minutes",
    popularity: "popularity",
    publicPlaylist: "public playlists",
    listeners: "listeners",
    plays: "plays",
  },
  [Language.ES]: {
    pageHeaderArtist: "ARTISTA",
    pageHeaderAlbum: "ÁLBUM",
    pageHeaderPlaylist: "PLAYLIST",
    pageHeaderSingle: "SENCILLO",
    pageHeaderCompilation: "COMPILACIÓN",
    pageHeaderProfile: "PERFIL",
    pageHeaderConcert: "CONCIERTO",
    pageHeaderEpisode: "EPISODIO",
    pageHeaderPodcast: "PODCAST",
    pageHeaderRadio: "RADIO",
    pageHeaderTop: "TOP",
    pageHeaderSong: "CANCIÓN",
    followers: "seguidores",
    song: "Canción",
    songs: "Canciones",
    minutes: "minutos",
    popularity: "popularidad",
    publicPlaylist: "playlist públicas",
    listeners: "escuchas",
    plays: "reproducciones",
  },
};

const listHeaderTranslations = {
  [Language.EN]: {
    titleListHeader: "TITLE",
    albumListHeader: "ALBUM",
    dateAddedListHeader: "DATE ADDED",
  },
  [Language.ES]: {
    titleListHeader: "TÍTULO",
    albumListHeader: "ÁLBUM",
    dateAddedListHeader: "FECHA",
  },
};

const removeTracksModalTranslations = {
  [Language.EN]: {
    cleanPlaylist: "CLEAN PLAYLIST",
    analyzingPlaylist: "Analyzing playlist",
    noCorruptOrDuplicateSongs: "No corrupted or duplicated songs",
    oneDuplicateOneCorrupt: "There is 1 duplicated song and a corrupt",
    oneDuplicate: "There is 1 duplicated song",
    oneCorrupt: "There is 1 corrupted song",
    multipleCorrupt: "There are {0} corrupted songs",
    multipleDuplicate: "There are {0} duplicated songs",
    multipleCorruptAndMultipleDuplicate:
      "There are {0} corrupted songs and {1} duplicated songs",
    close: "Close",
  },
  [Language.ES]: {
    cleanPlaylist: "LIMPIAR PLAYLIST",
    analyzingPlaylist: "Analizando playlist",
    noCorruptOrDuplicateSongs: "No hay canciones corruptas ni duplicadas",
    oneDuplicateOneCorrupt: "Hay una canción duplicada y una corrupta",
    oneDuplicate: "Hay una canción duplicada",
    oneCorrupt: "Hay una canción corrupta",
    multipleCorrupt: "Hay {0} canciones corruptas",
    multipleDuplicate: "Hay {0} canciones duplicadas",
    multipleCorruptAndMultipleDuplicate:
      "Hay {0} canciones corruptas y {1} canciones duplicadas",
    close: "Cerrar",
  },
};

export interface IFeaturesTranslations {
  eyeBrowText: string;
  titleText: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  anchorType: string;
  anchorText: string;
}

const featuresTranslationsEN: IFeaturesTranslations[] = [
  {
    eyeBrowText: "EASY TO USE TOOLS",
    titleText: "The best to fix your playlists",
    description:
      "Adding songs by any method may fail, leaving a save space with no data. This is a corrupt song.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938505/Spotify-Cleaner-App/Mu2_viopob.jpg",
    imageAlt: "A woman wearing headphones",
    anchorType: "login",
    anchorText: "Find out how",
  },
  {
    eyeBrowText: "WITHOUT COMPLICATIONS",
    titleText: "Remove invisible songs",
    description:
      "If the total number of songs in a playlist does not match the last number in the playlist, your playlist is corrupted.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938507/Spotify-Cleaner-App/Mu3_xbb08n.jpg",
    imageAlt: "A man jumping in the air",
    anchorType: "login",
    anchorText: "Find out how",
  },
  {
    eyeBrowText: "ELIMINATE DISTRACTIONS",
    titleText: "No more duplicates in your playlists",
    description:
      "Listen without repeating songs, Rindu removes duplicates from your playlists and favorites list.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938509/Spotify-Cleaner-App/Mu4_vigcfb.jpg",
    imageAlt: "A woman with her arms out",
    anchorType: "login",
    anchorText: "Find out how",
  },
  {
    eyeBrowText: "THE FEATURES YOU LOVE",
    titleText: "Explore and listen",
    description:
      "Rindu makes it easy for you to explore and listen to songs. Add songs to your playlists and favorites lists.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938516/Spotify-Cleaner-App/Mu5_n7u3cf.jpg",
    imageAlt: "A woman stretching the leg",
    anchorType: "login",
    anchorText: "Find out how",
  },
];
const featuresTranslationsES: IFeaturesTranslations[] = [
  {
    eyeBrowText: "HERRAMIENTAS FÁCILES DE USAR",
    titleText: "Lo mejor para arreglar tus playlists",
    description:
      "Agregar canciones por cualquier método puede fallar, por lo que queda un espacio guardado sin datos. Esto es una canción corrupta.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938505/Spotify-Cleaner-App/Mu2_viopob.jpg",
    imageAlt: "Una mujer usando audífonos",
    anchorType: "login",
    anchorText: "Descubre como",
  },
  {
    eyeBrowText: "SIN COMPLICACIONES",
    titleText: "Elimina las canciones invisibles",
    description:
      "Si el total de canciones de una playlist no concuerda con el último número de la lista, tu playlist está corrupta.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938507/Spotify-Cleaner-App/Mu3_xbb08n.jpg",
    imageAlt: "Un hombre saltando en el aire",
    anchorType: "login",
    anchorText: "Descubre como",
  },
  {
    eyeBrowText: "ELIMINA DISTRACCIONES",
    titleText: "No más duplicados en tus playlists",
    description:
      "Escucha sin repetir canciones, Rindu elimina los duplicados de tus playlists y lista de favoritos.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938509/Spotify-Cleaner-App/Mu4_vigcfb.jpg",
    imageAlt: "Una mujer con los brazos extendidos",
    anchorType: "login",
    anchorText: "Descubre como",
  },
  {
    eyeBrowText: "LAS FUNCIONALIDADES QUE AMAS",
    titleText: "Explora y escucha",
    description:
      "Rindu te permite explorar y escuchar canciones de manera sencilla. Agrega canciones a tus playlists y listas de favoritos.",
    imageSrc:
      "https://res.cloudinary.com/marcomadera/image/upload/v1645938516/Spotify-Cleaner-App/Mu5_n7u3cf.jpg",
    imageAlt: "Una mujer estirando la pierna",
    anchorType: "login",
    anchorText: "Descubre como",
  },
];

export const translations = {
  [Language.EN]: {
    [Page.Home]: {
      heroTitle: "Everything you need to enjoy music",
      heroInfoTitle: "Ideal for any type of situation.",
      heroInfoDescription:
        "Whether you have a bot that adds tracks and has been adding repeated tracks, Rindu removes those extra tracks and leaves just one.",
      features: JSON.stringify(featuresTranslationsEN),
      concludeSectionTitle: "What are you waiting for to discover Rindu?",
      concludeSectionDescription:
        "Enjoy music at your own pace, you set the rules and Rindu makes it happen for you.",
      concludeSectionCta: "Start now",
      loginButton: "LOGIN WITH SPOTIFY",
      madeBy: "Made by",
    },
    [Page.Dashboard]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Dashboard",
      topTracksHeading: "You love these songs",
      featuredPlaylistsHeading: "Enjoy these playlists",
      by: "By",
      recentlyListenedHeading: "Recently played",
      newReleasesHeading: "New releases for you",
      tracksRecommendationsHeading: "More of what you like",
      artistOfTheWeekHeading: "Top Hit Makers",
      tracksOfTheWeekHeading: "Weekly Chart Toppers",
      topTracksPlaylistHeading: "Your top songs",
      topTracksPlaylistLongTermTitle: "Long term",
      topTracksPlaylistMediumTermTitle: "Medium term",
      topTracksPlaylistShortTermTitle: "Short term",
      thisPlaylistsHeading: "This is:",
      recentListeningRecommendationsHeading: "Based on what you like",
      topArtistsHeading: "Enjoy your favorite artists",
      categories: "Categories",
    },
    [Page.Album]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      title: "Album",
    },
    [Page.NotFound]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      title: "NotFound",
    },
    [Page.Playlist]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      ...removeTracksModalTranslations[Language.EN],
      title: "Playlist",
      playlistAddedToLibrary: "Playlist added to your library",
      playlistRemovedFromLibrary: "Playlist removed from your library",
      playlistSearchHeading: "Let's find something for your playlist",
      searchPlaceholder: "Search for songs or episodes",
    },
    [Page.Artist]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      title: "Artist",
      showLess: "SHOW LESS",
      showMore: "SHOW MORE",
      readLess: "Read less",
      readMore: "Read more",
      popular: "Popular",
      following: "Following",
      follow: "Follow",
      concerts: "Concerts",
      singleAlbumsCarouselTitle: "Singles & EPs",
      appearAlbumsCarouselTitle: "Appears on",
      albumsCarouselTitle: "Albums",
      compilationsCarouselTitle: "Compilations",
      relatedArtistsCarouselTitle: "You may also like",
      artist: "Artist",
      about: "About",
      concertSetlistOn: "Concert setlists on",
      strBiography: "strBiographyEN",
      by: "By",
    },
    [Page.Search]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Search",
      search: "Search",
      searchPlaceholder: "Artists, songs, or podcasts",
      browseAll: "Browse All",
      songs: "Songs",
      playlists: "Playlists",
      artists: "Artists",
      artist: "Artist",
      albums: "Albums",
      album: "Album",
      shows: "Shows",
      episodes: "Episodes",
      by: "By",
    },
    [Page.Concert]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      ...removeTracksModalTranslations[Language.EN],
      title: "Concert",
      searchPlaceholder: "Search for songs or episodes",
      noTracksFound: "No tracks found for this concert",
      saveAsPlaylist: "Save concert to playlist",
    },
    [Page.Radio]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      ...removeTracksModalTranslations[Language.EN],
      title: "Radio",
      searchPlaceholder: "Search for songs or episodes",
      noTracksFound: "No tracks found for this radio",
      saveAsPlaylist: "Save radio to playlist",
    },
    [Page.TopTracks]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      ...removeTracksModalTranslations[Language.EN],
      title: "Tracks",
      searchPlaceholder: "Search for songs or episodes",
      noTracksFound: "No tracks found",
      saveAsPlaylist: "Save tracks to playlist",
      shortTerm: "Short term",
      mediumTerm: "Medium term",
      longTerm: "Long term",
    },
    [Page.Episode]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      title: "Episode",
      about: "About",
      allEpisodes: "All Episodes",
    },
    [Page.Podcast]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      title: "Podcast",
    },
    [Page.Genre]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Genre",
    },
    [Page.Show]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      title: "Show",
    },
    [Page.Track]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      title: "Track",
      playlistAddedToLibrary: "Playlist added to your library",
      playlistRemovedFromLibrary: "Playlist removed from your library",
      playlistSearchHeading: "Let's find something for your playlist",
      artist: "ARTIST",
      lyrics: "Lyrics",
      songs: "Songs",
      popularTracksBy: "Popular tracks by {0}",
      showMore: "SHOW MORE",
      showLess: "SHOW LESS",
    },
    [Page.User]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      title: "User",
      followers: "followers",
      by: "By",
      topTracksPlaylistHeading: "Your top songs",
      topTracksPlaylistLongTermTitle: "Long term",
      topTracksPlaylistMediumTermTitle: "Medium term",
      topTracksPlaylistShortTermTitle: "Short term",
      yourPlaylists: "Your playlists",
      playlists: "Playlists",
    },
    [Page.CollectionTracks]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      ...pageHeaderTranslations[Language.EN],
      ...listHeaderTranslations[Language.EN],
      ...removeTracksModalTranslations[Language.EN],
      title: "Track",
      playlistAddedToLibrary: "Playlist added to your library",
      playlistRemovedFromLibrary: "Playlist removed from your library",
      playlistSearchHeading: "Let's find something for your playlist",
      searchPlaceholder: "Search for songs or episodes",
    },
    [Page.CollectionAlbums]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Collection Albums",
      album: "Album",
      albums: "Albums",
    },
    [Page.CollectionArtists]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Collection Artists",
      artist: "Artist",
      artists: "Artists",
    },
    [Page.CollectionPlaylists]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Collection Playlists",
      by: "By",
      likedSongsCardTitle: "Liked Songs",
      likedSongsCardDescriptionPlural: "{0} liked songs",
      likedSongsCardDescriptionSingular: "{0} liked song",
    },
    [Page.CollectionPodcasts]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Collection Podcasts",
    },
    [Page.Collection]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      title: "Collection",
    },
    [Page.Preferences]: {
      ...sideBarTranslations[Language.EN],
      ...queueTranslations[Language.EN],
      preferences: "Settings",
      language: "Language",
      languageLabel:
        "Choose language - Changes will be applied after restarting the app",
      spanish: "Spanish",
      english: "English",
      reload: "Reload",
    },
  },
  [Language.ES]: {
    [Page.Home]: {
      heroTitle: "Todo lo que necesitas para disfrutar de la música",
      heroInfoTitle: "Ideal para cualquier tipo de situación.",
      heroInfoDescription:
        "Ya sea si tienes un bot que añade tracks y te ha estado añadiendo repetidos, Rindu elimina esos tracks que están de más y deja solo uno.",
      features: JSON.stringify(featuresTranslationsES),
      concludeSectionTitle: "¿Qué esperas para descubrir Rindu?",
      concludeSectionDescription:
        "Disfruta de la música a tu ritmo, tu pones las reglas y Rindu te lo hace realidad.",
      concludeSectionCta: "Empieza ahora",
      loginButton: "ENTRA CON SPOTIFY",
      madeBy: "Hecho por",
    },
    [Page.Dashboard]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Dashboard",
      topTracksHeading: "Las canciones que más te gustan",
      featuredPlaylistsHeading: "Disfruta de estás playlists",
      by: "De",
      recentlyListenedHeading: "Recién escuchado",
      newReleasesHeading: "Nuevos lanzamientos para ti",
      artistOfTheWeekHeading: "Los artistas más exitosos",
      tracksOfTheWeekHeading: "Las canciones más populares de la semana",
      topTracksPlaylistHeading: "Tu top de canciones",
      topTracksPlaylistLongTermTitle: "Largo plazo",
      topTracksPlaylistMediumTermTitle: "Mediano plazo",
      topTracksPlaylistShortTermTitle: "Corto plazo",
      thisPlaylistsHeading: "Esto es:",
      tracksRecommendationsHeading: "Más de lo que te gusta",
      recentListeningRecommendationsHeading: "Basado en lo que escuchaste",
      topArtistsHeading: "Disfruta de tus artistas favoritos",
      categories: "Categorias",
    },
    [Page.Album]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      title: "Álbum",
    },
    [Page.NotFound]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "NotFound",
    },
    [Page.Playlist]: {
      title: "Playlist",
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      ...removeTracksModalTranslations[Language.ES],
      playlistAddedToLibrary: "Playlist añadida a tu biblioteca",
      playlistRemovedFromLibrary: "Playlist removida de tu biblioteca",
      playlistSearchHeading: "Busquemos algo para tu playlist",
      searchPlaceholder: "Busca canciones o episodios",
    },
    [Page.Artist]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      title: "Artist",
      showLess: "MOSTRAR MENOS",
      showMore: "MOSTRAR MÁS",
      readLess: "Leer menos",
      readMore: "Leer más",
      popular: "Popular",
      following: "Siguiendo",
      follow: "Seguir",
      concerts: "Conciertos",
      singleAlbumsCarouselTitle: "Sencillos y EPs",
      appearAlbumsCarouselTitle: "Aparece en",
      albumsCarouselTitle: "Álbumes",
      compilationsCarouselTitle: "Compilaciones",
      relatedArtistsCarouselTitle: "Te pueden gustar",
      artist: "Artista",
      about: "Sobre",
      concertSetlistOn: "Lista de conciertos en",
      strBiography: "strBiographyES",
      by: "De",
    },
    [Page.Search]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Search",
      search: "Búsqueda",
      searchPlaceholder: "Artistas, canciones, o podcasts",
      browseAll: "Explora todo",
      songs: "Canciones",
      playlists: "Playlists",
      artists: "Artistas",
      artist: "Artista",
      albums: "Álbumes",
      album: "Álbum",
      shows: "Shows",
      episodes: "Episodios",
      by: "De",
    },
    [Page.Concert]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      ...removeTracksModalTranslations[Language.ES],
      title: "Concert",
      searchPlaceholder: "Busca canciones o episodios",
      noTracksFound: "No se encontraron canciones para este concierto",
      saveAsPlaylist: "Guardar concierto en playlist",
    },
    [Page.Radio]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      ...removeTracksModalTranslations[Language.ES],
      title: "Radio",
      searchPlaceholder: "Busca canciones o episodios",
      noTracksFound: "No se encontraron canciones para esta radio",
      saveAsPlaylist: "Guardar radio en playlist",
    },
    [Page.TopTracks]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      ...removeTracksModalTranslations[Language.ES],
      title: "Tracks",
      searchPlaceholder: "Busca canciones o episodios",
      noTracksFound: "No se encontraron canciones",
      saveAsPlaylist: "Guardar tracks en playlist",
      shortTerm: "Corto plazo",
      mediumTerm: "Mediano plazo",
      longTerm: "Largo plazo",
    },
    [Page.Episode]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      title: "Episode",
      about: "Sobre",
      allEpisodes: "Todos los episodios",
    },
    [Page.Podcast]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      title: "Podcast",
    },
    [Page.Genre]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Genre",
    },
    [Page.Show]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      title: "Show",
    },
    [Page.Track]: {
      title: "Track",
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      playlistAddedToLibrary: "Playlist añadida a tu biblioteca",
      playlistRemovedFromLibrary: "Playlist removida de tu biblioteca",
      playlistSearchHeading: "Busquemos algo para tu playlist",
      artist: "ARTISTA",
      lyrics: "Letra",
      songs: "Canciones",
      popularTracksBy: "Canciones populares de {0}",
      showMore: "MOSTRAR MÁS",
      showLess: "MOSTRAR MENOS",
    },
    [Page.User]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      title: "User",
      followers: "seguidores",
      by: "De",
      topTracksPlaylistHeading: "Tu top de canciones",
      topTracksPlaylistLongTermTitle: "Largo plazo",
      topTracksPlaylistMediumTermTitle: "Mediano plazo",
      topTracksPlaylistShortTermTitle: "Corto plazo",
      yourPlaylists: "Tus playlists",
      playlists: "Playlists",
    },
    [Page.CollectionTracks]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      ...pageHeaderTranslations[Language.ES],
      ...listHeaderTranslations[Language.ES],
      ...removeTracksModalTranslations[Language.ES],
      title: "Tus canciones",
      playlistAddedToLibrary: "Playlist añadida a tu biblioteca",
      playlistRemovedFromLibrary: "Playlist removida de tu biblioteca",
      playlistSearchHeading: "Busquemos algo para tu playlist",
      analyzingPlaylist: "Analizando playlist",
      searchPlaceholder: "Busca canciones o episodios",
    },
    [Page.CollectionAlbums]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Tus álbumes",
      album: "Álbum",
      albums: "Álbumes",
    },
    [Page.CollectionArtists]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Tus artistas",
      artist: "Artista",
      artists: "Artistas",
    },
    [Page.CollectionPlaylists]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Tus playlists",
      by: "De",
      likedSongsCardTitle: "Tus me gusta",
      likedSongsCardDescriptionPlural: "{0} canciones gustadas",
      likedSongsCardDescriptionSingular: "{0} canción gustada",
    },
    [Page.CollectionPodcasts]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Tus podcasts",
    },
    [Page.Collection]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      title: "Colección",
    },
    [Page.Preferences]: {
      ...sideBarTranslations[Language.ES],
      ...queueTranslations[Language.ES],
      preferences: "Preferencias",
      language: "Idioma",
      languageLabel:
        "Elige un idioma (los cambios se aplicarán cuando se reinicie la aplicación)",
      spanish: "Español",
      english: "Inglés",
      reload: "Volver a cargar",
    },
  },
};

export type Translations = (typeof translations)[Language];

export function getLanguageByCountry(country: string): Language {
  return spanishCountries.includes(country) ? Language.ES : Language.EN;
}

export function getTranslations<T extends Page>(
  country: string,
  page: T
): Translations[T] {
  const language = getLanguageByCountry(country);

  return translations[language][page];
}
