/** Central media configuration. See MEDIA-CREDITS.md for sources and hosting notes. */
export type ModuleMediaAsset = { image: string; video: string; imageSource: string; imageCredit: string; description: string; videoSource: string; videoDescription: string; position?: string };
export const moduleMedia: Record<string, ModuleMediaAsset> = {
  "enterprise-resource-planning": {
    "image": "https://images.pexels.com/photos/8117521/pexels-photo-8117521.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/4547/4547-720.mp4",
    "imageSource": "https://www.pexels.com/photo/a-group-of-people-having-a-meeting-in-the-office-8117521/",
    "imageCredit": "Ivan S",
    "description": "Colleagues meeting in a bright office",
    "videoSource": "https://mixkit.co/free-stock-video/people-having-a-work-meeting-around-a-table-4547/",
    "videoDescription": "Team planning around a table"
  },
  "finance-accounting": {
    "image": "https://images.pexels.com/photos/16282306/pexels-photo-16282306.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/42648/42648-720.mp4",
    "imageSource": "https://www.pexels.com/photo/a-person-using-a-calculator-16282306/",
    "imageCredit": "Mohamed hamdi",
    "description": "Financial calculations at a desk",
    "videoSource": "https://mixkit.co/free-stock-video/business-man-exposing-graphs-42648/",
    "videoDescription": "Progress and reporting presentation"
  },
  "human-resource-management": {
    "image": "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/4872/4872-720.mp4",
    "imageSource": "https://www.pexels.com/photo/crop-faceless-multiethnic-interviewer-and-job-seeker-going-through-interview-5699475/",
    "imageCredit": "Alex Green",
    "description": "Recruitment interview",
    "videoSource": "https://mixkit.co/free-stock-video/two-coworkers-talking-and-laughing-4872/",
    "videoDescription": "Colleagues working at a computer"
  },
  "project-management": {
    "image": "https://images.pexels.com/photos/6322388/pexels-photo-6322388.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/42648/42648-720.mp4",
    "imageSource": "https://www.pexels.com/photo/architects-using-a-tablet-to-plan-the-design-6322388/",
    "imageCredit": "Antoni Shkraba",
    "description": "Architects reviewing a project on a tablet",
    "videoSource": "https://mixkit.co/free-stock-video/business-man-exposing-graphs-42648/",
    "videoDescription": "Progress and reporting presentation"
  },
  "sales-crm": {
    "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/241/241-720.mp4",
    "imageSource": "https://www.pexels.com/photo/man-and-woman-near-table-3184465/",
    "imageCredit": "fauxels",
    "description": "Business handshake",
    "videoSource": "https://mixkit.co/free-stock-video/signing-a-contract-241/",
    "videoDescription": "Business document signing"
  },
  "inventory-management": {
    "image": "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://videos.pexels.com/video-files/4291725/4291725-hd_1280_720_50fps.mp4",
    "imageSource": "https://www.pexels.com/photo/warehouse-with-concrete-floors-4483610/",
    "imageCredit": "Tiger Lily",
    "description": "Organized warehouse aisles",
    "videoSource": "https://www.pexels.com/video/men-warehouse-work-loading-4291725/",
    "videoDescription": "Stock and material handling"
  },
  "procurement": {
    "image": "https://images.pexels.com/photos/4483941/pexels-photo-4483941.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/241/241-720.mp4",
    "imageSource": "https://www.pexels.com/photo/worker-in-a-warehouse-4483941/",
    "imageCredit": "Tiger Lily",
    "description": "Warehouse worker checking supplies",
    "videoSource": "https://mixkit.co/free-stock-video/signing-a-contract-241/",
    "videoDescription": "Business document signing"
  },
  "document-management": {
    "image": "https://images.pexels.com/photos/7731348/pexels-photo-7731348.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/241/241-720.mp4",
    "imageSource": "https://www.pexels.com/photo/documents-on-a-table-7731348/",
    "imageCredit": "Mikhail Nilov",
    "description": "Business documents being reviewed",
    "videoSource": "https://mixkit.co/free-stock-video/signing-a-contract-241/",
    "videoDescription": "Business document signing"
  },
  "manufacturing": {
    "image": "https://images.pexels.com/photos/37517098/pexels-photo-37517098.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://videos.pexels.com/video-files/4291725/4291725-hd_1280_720_50fps.mp4",
    "imageSource": "https://www.pexels.com/photo/close-up-of-industrial-welding-sparks-37517098/",
    "imageCredit": "Dogan şimşek",
    "description": "Metal welding with sparks",
    "videoSource": "https://www.pexels.com/video/men-warehouse-work-loading-4291725/",
    "videoDescription": "Stock and material handling"
  },
  "asset-management": {
    "image": "https://images.pexels.com/photos/27084606/pexels-photo-27084606.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://videos.pexels.com/video-files/4291725/4291725-hd_1280_720_50fps.mp4",
    "imageSource": "https://www.pexels.com/photo/a-machine-in-a-workshop-27084606/",
    "imageCredit": "HONG SON",
    "description": "Industrial machine wheel",
    "videoSource": "https://www.pexels.com/video/men-warehouse-work-loading-4291725/",
    "videoDescription": "Stock and material handling"
  },
  "energy-power": {
    "image": "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://videos.pexels.com/video-files/4291725/4291725-hd_1280_720_50fps.mp4",
    "imageSource": "https://www.pexels.com/photo/257736/",
    "imageCredit": "Pexels",
    "description": "Electrical wiring",
    "videoSource": "https://www.pexels.com/video/men-warehouse-work-loading-4291725/",
    "videoDescription": "Stock and material handling"
  },
  "e-label-studio": {
    "image": "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=1400",
    "video": "https://assets.mixkit.co/videos/4872/4872-720.mp4",
    "imageSource": "https://www.pexels.com/photo/person-taking-photo-of-the-qr-code-7289717/",
    "imageCredit": "Kampus Production",
    "description": "Product package QR code scanning",
    "videoSource": "https://mixkit.co/free-stock-video/two-coworkers-talking-and-laughing-4872/",
    "videoDescription": "Colleagues working at a computer"
  }
};
