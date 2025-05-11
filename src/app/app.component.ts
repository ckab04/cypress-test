import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "cypress_jenkins";

  onButtonClick() {
    console.log("The button has been clicked");
  }

  submit() {
    console.log("The form has been submitted");
  }
}
