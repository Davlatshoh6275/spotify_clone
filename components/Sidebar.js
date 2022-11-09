import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeOutlinedIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AccountBalanceIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <AddCircleOutlineOutlinedIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <FavoriteBorderOutlinedIcon className="h-5 w-5" />
          <p>Liked songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssFeedOutlinedIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist */}

        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
        <p className="cursor-pointer hover:text-white">playlist name...</p>
      </div>
    </div>
  );
}

export default Sidebar;
