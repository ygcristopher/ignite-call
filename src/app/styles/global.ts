import { globalCss } from  '@ignite-ui/react'

export const  globalStyles  =  globalCss({
    '*': {
      boxSizing: 'border-box',
      padding: 0,
      margin: 0,
      // border: '1px dashed red',
    },

    body: {
      backgroundColor:'$gray900',
      color: '$gray100',
      '-webkit-font-smoothing': 'antialiased',
    }
})