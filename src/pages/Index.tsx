import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Личность в социальной организации
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Понимание взаимодействия человека и коллектива — ключ к эффективной организации
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
            Эволюция социальных форм
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                  <Badge variant="outline" className="text-primary border-primary">Начальная форма</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Группа</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Простейшая форма объединения людей. Характеризуется минимальной структурой, 
                  слабыми связями и отсутствием четких целей. Участники могут быть объединены 
                  случайными обстоятельствами.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Слабая организация</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Временные связи</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in animation-delay-100 border-2 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Target" className="text-secondary" size={32} />
                  <Badge variant="outline" className="text-secondary border-secondary">Целевая форма</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Команда</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Организованная группа с четкой целью. Каждый участник имеет определенную роль, 
                  навыки дополняют друг друга. Присутствует координация и взаимная ответственность.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Четкие цели</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Распределение ролей</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Взаимодополнение</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in animation-delay-200 border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Users2" className="text-accent" size={32} />
                  <Badge variant="outline" className="text-accent border-accent">Высшая форма</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">Коллектив</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Зрелая форма организации с развитой культурой и ценностями. Характеризуется 
                  высоким уровнем самоорганизации, общей идентичностью и долгосрочной перспективой.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Общие ценности</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Самоорганизация</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-accent" />
                    <span>Корпоративная культура</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Личность в системе
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/80 backdrop-blur">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  <Icon name="User" size={200} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-12">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
                        <Icon name="User" className="text-white" size={40} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Я</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                        <Icon name="Heart" className="text-primary mt-1" size={24} />
                        <div>
                          <h4 className="font-bold mb-1">Ценности</h4>
                          <p className="text-sm text-muted-foreground">
                            Убеждения и приоритеты, определяющие поведение
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Icon name="UserCircle" className="text-secondary mt-1" size={24} />
                        <div>
                          <h4 className="font-bold mb-1">Роли</h4>
                          <p className="text-sm text-muted-foreground">
                            Функции и ожидания в различных контекстах
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                        <Icon name="Brain" className="text-accent mt-1" size={24} />
                        <div>
                          <h4 className="font-bold mb-1">Установки</h4>
                          <p className="text-sm text-muted-foreground">
                            Готовность действовать определенным образом
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                        <Icon name="Network" className="text-primary mt-1" size={24} />
                        <div>
                          <h4 className="font-bold mb-1">Связи</h4>
                          <p className="text-sm text-muted-foreground">
                            Социальные отношения и взаимодействия
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Icon name="TrendingUp" className="text-secondary mt-1" size={24} />
                        <div>
                          <h4 className="font-bold mb-1">Развитие</h4>
                          <p className="text-sm text-muted-foreground">
                            Рост компетенций и личностная эволюция
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                        <Icon name="Lightbulb" className="text-accent mt-1" size={24} />
                        <div>
                          <h4 className="font-bold mb-1">Мотивация</h4>
                          <p className="text-sm text-muted-foreground">
                            Внутренние и внешние стимулы к действию
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Структура социальной организации
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Star" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Статусы</h3>
              </div>
              <p className="text-muted-foreground">
                Иерархические позиции и уровень признания членов организации
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="GitBranch" className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Управление</h3>
              </div>
              <p className="text-muted-foreground">
                Система принятия решений и координации деятельности
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold">Коммуникации</h3>
              </div>
              <p className="text-muted-foreground">
                Каналы и способы обмена информацией внутри организации
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Нормы</h3>
              </div>
              <p className="text-muted-foreground">
                Правила поведения и стандарты взаимодействия
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Процессы</h3>
              </div>
              <p className="text-muted-foreground">
                Последовательность действий для достижения целей
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold">Культура</h3>
              </div>
              <p className="text-muted-foreground">
                Общие ценности, традиции и символы организации
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/30 mt-16">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>Образовательная инфографика по организационной психологии</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;