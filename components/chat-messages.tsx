import { Companion, Message } from "@prisma/client"
import ChatMessage, { ChatMessageeProps } from "./chat-message";
import { ElementRef, useEffect, useRef, useState } from "react";

interface ChatMessagesProps{
    companion:Companion;
    isLoading:boolean;
    messages:ChatMessageeProps[];
}

const ChatMessages = ({companion, isLoading, messages=[]}:ChatMessagesProps) => {
  const scrollRef = useRef<ElementRef<"div">>(null);
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true: false);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setFakeLoading(false)
    },1000)

  return ()=>{
    clearTimeout(timer);
  }
  },[messages.length])
  useEffect(()=>{
    scrollRef?.current?.scrollIntoView({behavior:"smooth"})
  },[])

  return (
    <div className="flex-1 overflow-y-auto pr-4">
        <ChatMessage
            isLoading = {fakeLoading}
            src={companion.src}
            role="system"
            content={`Hello, I am ${companion.name}, ${companion.description}`}
        />
        {messages.map((message)=>(
          <ChatMessage
            key={message.content}
            role={message.role}
            content={message.content}
            src={companion.src}          
          />
        ))}
        {isLoading && (
          <ChatMessage
            role="system"
            src={companion.src}
            isLoading
          />
        )}

       <div ref={scrollRef}/>
    </div>
  )
}

export default ChatMessages