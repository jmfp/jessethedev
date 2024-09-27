'use client'
import React from 'react'
import Editor from '@monaco-editor/react';
import { playground } from '@/app/lib/interface';

export default function Playground({defaultCode}: playground) {
  return (
    <Editor className='bg-[#1e1e1e] py-4' height="90vh" defaultLanguage="html" defaultValue={defaultCode.trim()} theme='vs-dark'/>
  )
}
