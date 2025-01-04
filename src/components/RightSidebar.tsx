import { Phone, Video, MoreVertical, ChevronDown, Search, Plus, X, Mail, Clock, User2, Layout } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface RightSidebarProps {
  className?: string
}

export function RightSidebar({ className }: RightSidebarProps) {
  return (
    <div className={cn("w-80 flex flex-col", className)}>
      {/* Profile Header */}
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-2">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/avatars/01.png" alt="Oguz Yagiz Kara" />
              <AvatarFallback>OYK</AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
            <ChevronDown className="h-4 w-4 text-white" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-1">Oguz Yağız Kara</h3>
        <p className="text-sm text-muted-foreground">11:59pm in Ankara, Turkey</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-12 mb-6">
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
          <Phone className="h-5 w-5 text-blue-600" />
          <span className="text-xs text-muted-foreground">Call</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
          <Video className="h-5 w-5 text-blue-600" />
          <span className="text-xs text-muted-foreground">Video</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
          <MoreVertical className="h-5 w-5 text-blue-600" />
          <span className="text-xs text-muted-foreground">More</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="px-6 grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-lg border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xs text-blue-600">$</span>
            </div>
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
          <p className="text-2xl font-semibold mb-1">$3,452</p>
          <p className="text-xs text-muted-foreground">3 Orders</p>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xs text-blue-600">#</span>
            </div>
            <span className="text-sm text-muted-foreground">Web Visits</span>
          </div>
          <p className="text-2xl font-semibold mb-1">42</p>
          <p className="text-xs text-muted-foreground">4 Link Clicks</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 flex mb-6">
        <Button variant="outline" size="icon" className="flex-1 px-4 py-2">
          <User2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="flex-1 px-4 py-2">
          <Layout className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" className="flex-1 px-4 py-2">
          <Mail className="h-4 w-4" />
        </Button>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search in general..." />
        </div>
      </div>

      {/* Information Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ChevronDown className="h-4 w-4" />
            <h4 className="font-medium">Information</h4>
          </div>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-blue-600">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Layout className="h-4 w-4" />
              <span className="text-sm">Segment</span>
            </div>
            <span className="text-sm">Abandoned Cart</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </div>
            <span className="text-sm">oguzyagizkara@gmail.com</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">Phone</span>
            </div>
            <span className="text-sm">+90 535 664 81 77</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last Visited</span>
            </div>
            <span className="text-sm">8 Aug, 2021</span>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ChevronDown className="h-4 w-4" />
            <h4 className="font-medium">Tags</h4>
          </div>
          <Button variant="ghost" size="sm" className="h-6 px-2 text-blue-600">
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
            Abandoned Cart User
            <X className="h-3 w-3 ml-1" />
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
            Popup
            <X className="h-3 w-3 ml-1" />
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
            Shop Error
            <X className="h-3 w-3 ml-1" />
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
            Successful
            <X className="h-3 w-3 ml-1" />
          </Badge>
        </div>
      </div>
    </div>
  )
}

