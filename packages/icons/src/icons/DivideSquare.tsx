import createIcon from '../createIcon'
import { sxc } from '@robin-ui/styles'

export default createIcon(
  <sxc.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="8" y1="12" x2="16" y2="12"></line>
    <line x1="12" y1="16" x2="12" y2="16"></line>
    <line x1="12" y1="8" x2="12" y2="8"></line>
  </sxc.svg>,
  'DivideSquare'
)