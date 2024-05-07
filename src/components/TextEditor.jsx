/* eslint-disable react/prop-types */
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

export const TextEditor = ({ mainContent, setMainContent }) => {
  //Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"]
    ]
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color"
  ]

  return (
    <ReactQuill
      theme="snow"
      value={mainContent}
      onChange={setMainContent}
      modules={modules}
      formats={formats}
    />
  )
}
