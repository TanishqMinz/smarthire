import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'

export interface ChatMessageProps {
  sender: string
  message: string
  time: string
  isAI?: boolean
}

export function ChatMessage({ sender, message, time, isAI }: ChatMessageProps) {
  return (
    <div className={`flex flex-col mb-6 ${isAI ? 'items-end' : ''}`}>
      <div className={`flex items-start gap-2 ${isAI ? 'flex-row-reverse' : ''}`}>
          <Avatar className="w-8 h-8">
            <AvatarImage src={isAI ?'/avatars/01.png' : '{sender}'} alt={sender} />
            <AvatarFallback>{sender[0]}</AvatarFallback>
          </Avatar> 
        <div className={`max-w-[70%] ${isAI ? 'bg-blue-500 text-white' : 'bg-white'} rounded-lg p-3`}>
          <p className="text-sm">{message}</p>
          {!isAI && (
            <div className="bg-accent flex items-center gap-2 p-2 rounded-lg mt-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm">Smart Response Detected!</span>
              </div>
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">Select</Button>
            </div>
          )}
        </div>
      </div>
      <span className={`text-xs text-muted-foreground mt-1 ${isAI ? 'mr-10' : 'ml-10'}`}>{time}</span>
    </div>
  )
}

