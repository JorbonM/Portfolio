import { useState } from 'react';
import "./index.scss"
import github_logo from "../../../assets/ProjectsPage/Ext/github_PNG23.png"

export default function ProjectPageExt()
{
    return <>
<div className="mx-16 my-8 rounded-lg bg-[#587ba3]/50 backdrop-blur-sm py-12">
  <div className="flex flex-col items-center justify-center">
    <h1 className="mb-6 text-center text-6xl font-bold text-[#f0eded]">
      Projects
    </h1>

    <a href="https://github.com/JorbonM" target="_blank" rel="noreferrer">
      <img
        src={github_logo}
        alt="GitHub"
        className="w-24 h-auto"
      />
    </a>
  </div>
</div>

    </> 
}
