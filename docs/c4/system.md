```mermaid
C4Context
      title System Context diagram for Remembrancer app
      Person(user, "User", "User save events")
      System_Boundary(remembrancer-boundary, "Remembrancer  system") {
        Rel(user,remembrancer, "Add/edit checklist runs regressions")
        System(remembrancer, "Remembrancer system")
      }
      UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")
```
