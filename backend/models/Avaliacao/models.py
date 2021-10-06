from ..Secao.models import Secao
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Secao(models.Model):
    topico = models.TextField(blank=True)

    def __str__(self):
        return self.topico

    @property
    def subtopicos(self):
        return self.subtopico_set.all()


class Subtopico(models.Model):
    secao = models.ForeignKey(Secao, on_delete=models.CASCADE)
    nome = models.TextField(blank=True)
    status = models.CharField(max_length=2, blank=True)
    comentario = models.TextField(blank=True)

    def __str__(self):
        return self.status


class Avaliacao(models.Model):
    secao = models.ForeignKey(Secao, on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    codigo = models.TextField(blank=True)
    nomeHospital = models.TextField(blank=True)
    idsAvaliadores = models.TextField(blank=True)
    data = models.DateTimeField(auto_created=True)

    def __str__(self):
        return self.codigo
