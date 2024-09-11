import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer>
      {/* CARD LÁ DE BAIXO */}
      <Card className="px-5 py-6">
        <CardContent className="flex flex-col items-center">
          <img src="/01/LOGO.png" alt="Logo" className="mb-4" />
          <div className="flex justify-center">
            <p className="text-sm text-gray-400 text-center">
              Copyright © 2024 FEBRACIS LISBOA<br/><br/>
              Ritmo Adequado Unipessoal Lda – <br/><br/>
              NIF: PT515916943<br/><br/>
              Todos os direitos reservados.<br/><br/>
              Av. Cel. Eduardo Galhardo 16, 1170-105 Lisboa<br/><br/>
              Avisos legais | Política de privacidade | Referencias científicas<br/><br/>
              Este site não é afiliado ao Facebook,
              Meta, Google ou qualquer rede social ou recursos de marketing.<br/>
              A compra desse material não garante nenhum tipo de resultado.
              Fazemos todos os esforços para indicar<br/>claramente e mostrar todas as provas do produto e usamos
              resultados reais de alunos.
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer