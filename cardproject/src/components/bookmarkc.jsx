import React from 'react'

const BookmarkButton = () => {
  const [saved, setSaved] = useState(false);

  return (
    <button
      id="save"
      onClick={() => setSaved(!saved)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        cursor: "pointer"
      }}
    >
      {saved ? "Saved" : "Save"}
      <Bookmark
        size={16}
        strokeWidth={1}
        fill={saved ? "black" : "none"}
      />
    </button>
  );
};

export default BookmarkButton