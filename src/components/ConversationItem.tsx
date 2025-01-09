import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface ConversationItemProps {
  name: string
  message: string
  time: string
  isActive?: boolean
  isBot?: boolean
  isWhatsApp?: boolean
  isInstagram?: boolean
}

export function ConversationItem({ name, message, time, isActive, isBot, isWhatsApp, isInstagram }: ConversationItemProps) {
  return (
    <div className={`flex flex-col p-2 rounded-lg ${isActive ? 'bg-accent' : 'hover:bg-accent/50'}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarImage src={`/avatars/${isBot ? 'bot.png' : '01.png'}`} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm">{name}</h4>
              {isWhatsApp && <Badge variant="secondary" className="h-5">WhatsApp</Badge>}
              {isInstagram && <Badge variant="secondary" className="h-5">Instagram</Badge>}
            </div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <div className="flex justify-between items-start mt-1">
        <p className="text-sm text-muted-foreground truncate flex-1">{message}</p>
        <svg className="w-4 h-4 flex-shrink-0 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  )
}

