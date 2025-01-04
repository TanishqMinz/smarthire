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
    <div className={`flex items-start p-2 rounded-lg ${isActive ? 'bg-accent' : 'hover:bg-accent/50'}`}>
      <Avatar className="w-10 h-10 mr-3">
        <AvatarImage src={`/avatars/${isBot ? 'bot.png' : '01.png'}`} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <h4 className="font-semibold text-sm truncate">{name}</h4>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground truncate">{message}</p>
      </div>
      {isWhatsApp && <Badge variant="secondary" className="ml-2">WhatsApp</Badge>}
      {isInstagram && <Badge variant="secondary" className="ml-2">Instagram</Badge>}
    </div>
  )
}

