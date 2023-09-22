import React, { useState } from 'react';
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

import '../app.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({author, publishedAt,content}) {

    const formatDate = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeForNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    const [isvisible, setVisible] = useState(true);
    const [comment, setComment] = useState([]);
    const [textComment, setTextComment] = useState('');


    function handleNewComment(){
        event.preventDefault();
        setComment([...comment, textComment])
        setTextComment('')

    }

    function deleteComment(comment) {
        console.log('deletei o comentario ' + comment )
        
    }

    function handleNewTextComment(){
        setTextComment(event.target.value)

    }

    return (
        <article class="p-10 bg-card rounded-[8px]" >
            <header class="flex items-center justify-between ">
                <div class="flex " >
                    <Avatar class="w-12 h-12 border-4  border-gray-700 rounded-[8px]" src={author.avatar} alt="" />
                    <div class=" flex flex-col pl-5">
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={formatDate}>{publishedDateRelativeForNow}</time>
            </header>
            <main class=" leading-relaxed mt-6">
              {content.map(contentItem =>{
                if(contentItem.type === 'paragraph'){
                    return <p key={contentItem.content} class="text-gray-700">{contentItem.content}</p>
                }
                else if(contentItem.type === 'link'){
                    return <p key={contentItem.content} class=" pt-6 text-textrocketseat"> <a href="#">{contentItem.content}</a></p>
                }
              })}
            </main>

            <hr class=" pt-6 w-full border-t border-white mt-6" />

            <form onSubmit={handleNewComment} class="flex flex-col items-start gap-4" action="">
                <strong>Deixe seu feedback</strong>
                <textarea
                        onChange={handleNewTextComment}
                        class=" focus:outline-none focus:ring-1 focus:ring-textrocketseat focus:box w-full h-24 bg-backgrounded rounded-[8px] text-xs border-2 p-3 border-textrocketseat "
                        onFocus={() => setVisible(true)}
                        value={textComment}
                        onBlur={() => setVisible(true)}
                        ></textarea>
                <footer class={`focus-within:${isvisible !== true ? ' invisible max-h-0' : 'visible'}`}>
                    <button type='submit' class="bg-textrocketseat  px-6 py-4 rounded-[8px]">
                        <span class="text-sm font-bold text-white ">Publicar</span>
                    </button>
                </footer>

            </form>

          
        {comment.map(comment => {
            return <Comment onDeleteComment={deleteComment} key={comment} content={comment} />
        })}

        
        </article>
        
    )
}