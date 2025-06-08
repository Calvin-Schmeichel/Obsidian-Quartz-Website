import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Calvin-Schmeichel",
      LinkedIn: "https://www.linkedin.com/in/calvinschmeichel/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.PageTitle(),
    //Component.Search(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    
    Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(
      { //https://discord.com/channels/927628110009098281/1297479935853592636/1297479935853592636
      folderClickBehavior: "link",
      filterFn: (node) => {
        if (["Media", "Drafts"].includes(node.name)) {
          return false;
        }
        return true;
      }
    }
    )),
  ],
  right: [
    //Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    //Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
  header: [
    Component.PageTitle(),
    Component.Search(),
    Component.Darkmode(),
  ],
  afterbody: [
    Component.Explorer(),
  ],
}
