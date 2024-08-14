import {expect,test,describe} from "vitest"

describe("Classe Dado", () => {
    test("Consiga instanciar a classe", () => {
        const dado = new Dado()
        expect(dado).toBeInstanceOf(Dado)
    })
})
test("deve ter um valor", () => {
    const dado = new Dado()
    expect(dado).toHaveProperty('valor')
})
test("deve poder definir o valor", () => {
    const dado = new Dado()
    dado.valor = 3;
    expect(dado.valor).toEqual(3)
})
test("deve dar erro definir um valor fora de 1-6", () => {
    const dado = new Dado()
    expect(() => {
        dado.valor = -3
    }).toThrowError();
})
test("deve poder ser rolado", () => {
    const dado = new Dado();
    expect(dado).toHaveProperty("rolar")
    expect(typeof dado.rolar).toBe("function")
})