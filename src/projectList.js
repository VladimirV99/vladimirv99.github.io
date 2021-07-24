const projects = [
  {
    name: 'Circa2020',
    description: 'Circa2020 is a tool for designing and simulating logic circuits. It supports all basic components (gates, plexers, memory, ...), saving and loading files, custom components and a lot of other useful features.',
    tags: ['C++', 'Qt', 'CMake', 'Catch2'],
    url: 'https://gitlab.com/VladimirV99/Circa2020',
    slides: [
      {image: 'projects/circa2020/sr_latch.png', description: 'SR latch example'},
      {image: 'projects/circa2020/components.png', description: 'Component list'},
      {image: 'projects/circa2020/rotate_resize.png', description: 'Rotating and resizing components'},
      {image: 'projects/circa2020/composite.png', description: 'Custom component created from existing circuit'}
    ]
  },
  {
    name: 'Automatic Translation',
    description: 'Language translation using a sequence-to-sequence LSTM neural network. This project was made for the computer intelligence course at the Faculty of Mathematics, University of Belgrade.',
    tags: ['Python', 'Tensorflow', 'Jupyter-Notebook'],
    url: 'https://github.com/VladimirV99/Automatic-Translation'
  },
  {
    name: 'Portal',
    description: 'A portal like game written from scratch in C and OpenGL using the freeGLUT library. It contains a single level you traverse by firing and walking through portals. This game was made for the computer graphics course at the Faculty of Mathematics, University of Belgrade.',
    tags: ['C', 'OpenGL', 'freeGLUT', 'Makefile'],
    url: 'https://github.com/VladimirV99/Portal',
    slides: [
      {image: 'projects/portal/recursive.png', description: 'Recursive portal rendering and player model'},
      {image: 'projects/portal/companion_cube.png', description: 'Companion cube'},
      {image: 'projects/portal/cake.png', description: 'The cake is a lie'}
    ]
  },
  {
    name: 'Alas',
    description: 'Alas is my personal website made for the student server at the Faculty of Mathematics, University of Belgrade. The webiste is hosted at http://alas.matf.bg.ac.rs/~mi17145.',
    tags: ['JavaScript', 'Node', 'Webpack', 'Mocha', 'Chai', 'HTML', 'CSS'],
    url: 'https://github.com/VladimirV99/Alas',
    slides: [
      {image: 'projects/alas/home.png', description: 'Home page'},
      {image: 'projects/alas/converter.png', description: 'Base converter'},
      {image: 'projects/alas/arithmetics.png', description: 'Hardware arithmetics'},
      {image: 'projects/alas/ieee754.png', description: 'IEEE754 converter'}
    ]
  },
  {
    name: 'Marker',
    description: 'Marker is a forum designed for college students to help each other in solving problems and learning.',
    tags: ['JavaScript', 'Node', 'React', 'MySQL', 'Redis', 'HTML', 'CSS'],
    url: 'https://github.com/VladimirV99/Marker',
    slides: [
      {image: 'projects/marker/theme_light.png', description: 'Light Theme UI'},
      {image: 'projects/marker/theme_dark.png', description: 'Dark Theme UI'},
      {image: 'projects/marker/thread.png', description: 'Thread'},
      {image: 'projects/marker/profile_page.png', description: 'Edit Profile Page'},
      {image: 'projects/marker/user_page.png', description: 'User Page'}
    ]
  },
  {
    name: 'Markdown',
    description: 'A lightweight JavaScript Markdown to HTML converter based on showdown. It includes a GitHub-like markdown editor for easier styling and previewing the HTML.',
    tags: ['JavaScript', 'Node', 'Webpack', 'Mocha', 'Chai', 'HTML', 'CSS'],
    url: 'https://github.com/VladimirV99/Markdown',
    slides: [
      {image: 'projects/markdown/write.png', description: 'Write page'},
      {image: 'projects/markdown/preview.png', description: 'Preview page'}
    ]
  },
  {
    name: 'Blog',
    description: 'A blog website built using MEAN stack.',
    tags: ['JavaScript', 'Node', 'Angular', 'MongoDB', 'HTML', 'SCSS'],
    url: 'https://github.com/VladimirV99/Blog',
    slides: [
      {image: 'projects/blog/home_light.png', description: 'Home page light theme'},
      {image: 'projects/blog/home_dark.png', description: 'Home page dark theme'},
      {image: 'projects/blog/write.png', description: 'Post write page with a markdown editor'},
      {image: 'projects/blog/post.png', description: 'Post view with comments and replies'},
      {image: 'projects/blog/posts.png', description: 'User\'s post list'}
    ]
  },
  {
    name: 'MultiFrame',
    description: 'MultiFrame is a cross-platform obstacle avoidance game where you control multiple entities at the same time.',
    tags: ['Java', 'libGDX', 'Game', 'Desktop', 'Android'],
    url: 'https://github.com/VladimirV99/MultiFrame',
    slides: [
      {image: 'projects/multiframe/gameplay.png', description: 'Dual Frame Mode Gameplay'},
      {image: 'projects/multiframe/main_menu.png', description: 'Main Menu'},
      {image: 'projects/multiframe/mode_select.png', description: 'Mode Select Screen'},
      {image: 'projects/multiframe/mode_config.png', description: 'Dual Frame Custom Configuration'}
    ]
  },
  {
    name: 'Android File Manager',
    description: 'This is an implementation of a file manager for Android. It includes launchers for basic file types like text, image, audio and video files. Other files can be opened using appropriate apps installed on the system. The app supports two themes: light and dark which can be set manually or using the system dark mode on Android 10+',
    tags: ['Kotlin', 'Android', 'Material', 'Jetpack'],
    url: 'https://github.com/VladimirV99/AndroidFileManager',
    slides: [
      {image: 'projects/filemanager/theme_light.png', description: 'Light Theme UI'},
      {image: 'projects/filemanager/theme_dark.png', description: 'Dark Theme UI'},
      {image: 'projects/filemanager/navigation.png', description: 'Navigation Menu'},
      {image: 'projects/filemanager/selection.png', description: 'File Selection Mode'}
    ]
  },
  {
    name: 'Arduino Projects',
    description: 'A collection of Arduino based projects that demonstrate the usage of various sensors and components.',
    tags: ['Arduino', 'C++', 'Python'],
    url: 'https://github.com/VladimirV99/Arduino-Projects',
  },
  {
    name: 'Spring Pendulum',
    description: 'A collection of physics simulations of a pendulum on a spring',
    tags: ['Python', 'Processing', 'Unity', 'C#'],
    url: 'https://github.com/VladimirV99/Spring-Pendulum',
    slides: [
      {image: 'projects/spring_pendulum/python_default.png', description: 'Python simulation from default position'},
      {image: 'projects/spring_pendulum/python_stretched.png', description: 'Python simulation when stretched'}
    ]
  }
]

export default projects;