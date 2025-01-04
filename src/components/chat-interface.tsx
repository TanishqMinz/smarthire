import { Search, MoreVertical, Send, PlusCircle, ChevronDown, ArrowLeft, Users, Check, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ConversationItem } from './ConversationItem.tsx'
import { ChatMessage } from './ChatMessage.tsx'
import chatData from '../data/chat-data.json'
import { RightSidebar } from './RightSidebar.tsx'

export default function ChatInterface() {
  return (
    <div className="h-screen flex bg-background">
      {/* Left Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <h2 className="font-semibold">BlueChat</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Tabs defaultValue="messages">
            <TabsList className="w-full">
              <TabsTrigger value="messages" className="flex-1">Messages</TabsTrigger>
              <TabsTrigger value="segments" className="flex-1">Segments</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span className="font-medium pr-2">All</span>
            <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 mr-2">232</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground mr-2">Oldest</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        <div className="flex-1 overflow-auto p-2 space-y-2">
          {chatData.conversations.map((conversation) => (
            <ConversationItem key={conversation.id} {...conversation} />
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/avatars/01.png" alt="Oguz Yagiz Kara" />
              <AvatarFallback>OYK</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Oguz Yağız Kara</h3>
              <p className="text-sm text-muted-foreground">oguz@bluereceipt.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="messenger">
              <SelectTrigger className="w-[130px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="messenger">Messenger</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon">
              <Check className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon">
              <ChevronDown className='h-4 w-4' />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Info className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="mb-4 bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-sm text-blue-800">This is the very beginning of your direct message history with Oguz Yagiz Kara</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-center text-muted-foreground">Today</p>
          </div>
          {chatData.messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}
        </div>
        <div className="border-t p-4">
          <div className="flex gap-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
      
      <RightSidebar className='border-1'/>
    </div>
  )
}

