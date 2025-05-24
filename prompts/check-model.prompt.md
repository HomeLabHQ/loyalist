---
mode: "edit"
description: "Evaluate django model"
---

For selected django model class suggest improvements to the model.
Provide help_text for fields that are missing it.
Suggest adding indexes for fields that are most likely will be queried, add meta class with verbose names and ordering.
Also suggest adding **str** method if it is missing. For reference see example below.

```python

class RejectionReason(models.Model):
    """
    Rejection reason model.
    """
    value = models.CharField(max_length=255, unique=True, verbose_name="Rejection reason",help_text="Short code/value for internal use")
    description = models.TextField(blank=True, verbose_name="Description",help_text="Description to show to the user")
    class Meta:
        ordering = ["-pk"]
        db_table = "rejection_reasons"
        verbose_name = _("Rejection Reason")
        verbose_name_plural = _("Rejection Reasons")
        indexes = [
            models.Index(fields=["value"]),
        ]

    def __str__(self) -> str:
        return self.value

```
