import Foundation
import Publish
import SplashPublishPlugin
import Plot

try Blog().publish(using: [
    .optional(.copyResources()),
    .addMarkdownFiles(),
    .installPlugin(.splash(withClassPrefix: "")),
    .group([.generatePaginatedPages()]),
    .generateHTML(withTheme: .blog),
    .generateRSSFeed(including: [.blog]),
    .generateSiteMap(),
    .deploy(using: .gitHub("JiHoonAHN/Blog"))
])
