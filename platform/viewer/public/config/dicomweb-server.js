window.config = {
  routerBasename: '/',
  extensions: [],
  showStudyList: true,
  servers: {
    dicomWeb: [
      {
        name: 'dicomweb_server',
        wadoUriRoot: 'http://localhost:5985',
        qidoRoot: 'http://localhost:5985',
        wadoRoot: 'http://localhost:5985',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
      },
    ],
  },
  hotkeys: [
    // ~ Global
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Image Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Image Viewport',
      keys: ['left'],
    },
    // Supported Keys: https://craig.is/killing/mice
    // ~ Cornerstone Extension
    { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    // clearAnnotations
    { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
    { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
    // firstImage
    // lastImage
    {
      commandName: 'nextViewportDisplaySet',
      label: 'Previous Series',
      keys: ['pagedown'],
    },
    {
      commandName: 'previousViewportDisplaySet',
      label: 'Next Series',
      keys: ['pageup'],
    },
    // ~ Cornerstone Tools
    { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
  ],
};