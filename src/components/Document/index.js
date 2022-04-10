import {FaFileAlt} from 'react-icons/fa'

import './index.css'

const Document = () => (
  <div className="document-container">
    <div className="file-container">
      <FaFileAlt color="light-slategray" />
      <p className="document-filename">CheckupResult.pdf</p>
    </div>
    <p className="file-size">123kb</p>
  </div>
)

export default Document
