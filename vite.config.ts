import { resolve } from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import React from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    React(),
    Pages(),
    Unocss(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom'
      ],
      dts: true
    })
  ],

  test: {
    environment: 'jsdom'
  }
})
