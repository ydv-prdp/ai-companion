import { Avatar, AvatarImage } from "./avatar";

interface BotAvatarProps{
    src:string;
}

const BotAvatar = ({src}:BotAvatarProps) => {
  return (
    <Avatar className="h-12 w-12">
        <AvatarImage  src={src}/>
    </Avatar>
  )
}

export default BotAvatar