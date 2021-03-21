import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfieStatus";

describe("ProfileStatus component", () => {
   test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="course end!!!" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("course end!!!");
   });

   test("during deactivate edit mode - sould be span", () => {
      const component = create(<ProfileStatus status="course end!!!" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span).not.toBeNull();
   });
   test("text span", () => {
      const component = create(<ProfileStatus status="course end!!!" />);
      const root = component.root;
      const span = root.findByType("span");
      expect(span.props.children).toBe('course end!!!');
   });

   test("input should be displayed in editMode", () => {
      const component = create(<ProfileStatus status="course end!!!" />);
      const instance = component.root;
      const span = instance.findByType("span");
      span.props.onDoubleClick();
      const input = instance.findByType("input");
      expect(input.props.value).toBe('course end!!!');
   });
});