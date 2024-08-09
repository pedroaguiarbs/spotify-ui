interface PlaylistItemProps {
  src: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({
  src,
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex items-center gap-3 my-1">
      <img src={src} alt={title} className="w-14 h-14 rounded-md" />
      <div className="flex flex-col">
        <strong className="font-normal">{title}</strong>
        <div className="flex items-center space-x-1">
          {icon && <a className="text-green-500 rotate-45">{icon}</a>}
          <span className="text-sm text-zinc-400">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
