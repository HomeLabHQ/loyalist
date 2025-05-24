---
mode: "edit"
description: "Generate summary and description for drf-spectacular extend_schema_view"
---

For selected viewset class generate description and summary for each present method, leave existing parameters in place just add description and summary
Also for each method with @action add docstring with description of the method.
Summary is shorter than description and should be one line long. 
Description can provide more details according to ViewSet context but resulting line with description element should not be longer than 120 symbols

```python
@extend_schema_view(
    list=extend_schema(...other parameters, summary="List all users", description="List all users"),
    retrieve=extend_schema(...other parameters, summary="Retrieve a specific user", description="Retrieve a specific user"),
    create=extend_schema(...other parameters, summary="Create a new user", description="Create a new user"),
    update=extend_schema(...other parameters, summary="Update an existing user", description="Update an existing user"),
    partial_update=extend_schema(...other parameters, summary="Partially update an existing user", description="Partially update an existing user"),
    destroy=extend_schema(...other parameters, summary="Delete a specific user", description="Delete a specific user"),
    deactivate=extend_schema(...other parameters, summary="Deactivate a specific user", description="Deactivate a specific user"),
)
class UserViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):

    @action(detail=True, methods=["post"])
    def deactivate(self, request, pk=None):
        """
        Deactivate user

        Deactivate a specific user. This will prevent the user from logging in.
        """
        user = self.get_object()
        user.is_active = False
        user.save()
        return Response(status=204)
    ...
```
