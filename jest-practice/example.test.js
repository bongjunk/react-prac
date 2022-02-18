describe("expect test", () => {
  // .tobe - obj가 같은 객체를 가리키고 있는지 확인한다
  it("29 to equal 29", () => {
    expect(29).toBe(29);
  });
  // .toEqual - 객체의 내용이 같은지 확인
  it("{age: 29} to equal {age: 29}", () => {
    expect({ age: 29 }).toEqual({ age: 29 });
  });
  // 배열 또는 문자열 크기를 확인할 때 특히 유용
  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });
  // obj의 특성 이 오브젝트에 존재 하는지 확인
  it(".toHaveProperty", () => {
    expect({ name: "Bong" }).toHaveProperty("name");
    expect({ name: "Bong" }).toHaveProperty("name", "Bong");
  });
  // 변수가 정의되지 않았는지 확인
  it(".toBeDefined", () => {
    expect({ name: "Bong" }.name).toBeDefined();
  });
  // 값이 무엇인지 상관하지 않고 부울 컨텍스트에서 값이 false인지 확인하려는 경우
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  // 숫자 또는 큰 정수 값에 대해 예상 됨을 비교 >
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  // 숫자 또는 큰 정수 값에 대해 예상 됨을 비교 >=
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  // 객체가 클래스의 인스턴스인지 확인
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
