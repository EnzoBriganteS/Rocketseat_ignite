import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './app.css'
import { Post } from './components/Post'


const posts = [
  {
    id: 1,
    author:{
      name: 'Jonathan',
      avatar: 'https://avatars.githubusercontent.com/u/1234?v=4',
      role:"admin"
    },
    content: [
      { type:"paragraph", content: "Fala galeraa,"  },
      { type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat"  },
      { type:"link", content: "O nome do projeto é DoctorCare"  },
    ],
    publisheAt: new Date("2022-06-06 20:00:00")
  },
  {
    id:2,
    author:{
      name: 'Cafu',
      avatar: 'https://avatars.githubusercontent.com/u/1234?v=4',
      role:"owner"
    },
    content: [
      { type:"paragraph", content: "Salve Salve galerinha !!,"  },
      { type:"paragraph", content: "Finelaizei o nlw return"  },
      { type:"link", content: "Arrasta pra cima cachorro"  },
    ],
    publisheAt: new Date("2024-05-05 22:20:00")
  },
]

function App() {

  return (
    <div>
      <Header author="Enzo" content="Jujutsu Kaisen" />
      <div class="max-w-[70rem] mx-auto my-8 px-4
      flex flex-row gap-8 items-start"  >

      <Sidebar />

<div class="flex flex-col gap-6">
       {
       
       posts.map((post) =>{
        return <Post key={post.id} content={post.content} publishedAt={post.publisheAt} author={post.author} />
       })

       }

</div>


      </div>
      </div>
  )
}

export default App
